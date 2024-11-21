from openai import OpenAI
from os import getenv
import os
from datetime import datetime,timedelta
from concurrent.futures import ThreadPoolExecutor
import math
import pandas as pd
import re
import random
import threading
from dotenv import load_dotenv

load_dotenv()
# gets API Key from environment variable OPENAI_API_KEY
# gets API Key from environment variable OPENAI_API_KEY
client = OpenAI(
  base_url=os.environ["OPENROUTER_API"],
  api_key=os.environ["OPENROUTER_KEY"],
)

# OPENROUTER MODEL
#MODEL='anthropic/claude-3.5-sonnet'
MODEL='openai/gpt-4o-2024-11-20'

# TZ MODEL
# MODEL='tuzi-claude35-sonnet-20240620'
# MODEL='gpt-4o-2024-08-06'

# X Grok
#MODEL='grok-beta'

def get_random_setup(sheet, excel_file = 'data.xlsx'):
    df = pd.read_excel(excel_file, sheet_name=sheet, header=None)
    
    # 获取第一列的所有值
    first_column = df[0].tolist()
    
    # 随机返回一个值
    return random.choice(first_column)

def create_prompt():
    PROMPT = f"""You will base on the information user provide, write a [2000] word blog post regarding Sequence Diagram.

theme: {get_random_setup('主题')}
concept: {get_random_setup('切入')}
level: {get_random_setup('描述度')}

- Create a title
- Use the best keyword at least once every 400 words. 
- The blog post should include an introduction, main body, and conclusion. The conclusion should invite readers to leave a comment. 
- Use statistic numbers to make more convincing.
- Use mermaid sequence diagram examples
- The main body should be split into at least 4 different subsections.
- Use simple words, avoid AI sense of sentences.


Provide your response in markdown block format, no other information.

- slug: title-in-english
- tags: use only 1 english word with at least 5 tags in list
- use English

Example format:
```markdown
---
title: 'Deep meaning English Title'
description: 'A description of the blog post.'
authors: [xiaowenz]
slug: slug-in-english
tags:
  - Tag1
  - Tag2
hide_table_of_contents: false
---

## Section 1

## Section 2
```
"""
    return PROMPT



def generate_article():

    completion = client.chat.completions.create(
    extra_headers={
        "HTTP-Referer": "https://zenuml.com", # Optional, for including your app on openrouter.ai rankings.
        "X-Title": "ZenUML Blog", # Optional. Shows in rankings on openrouter.ai.
    },
    #model="qwen/qwen-2.5-72b-instruct",
    #model="anthropic/claude-3.5-sonnet",
    model=MODEL,
    messages=[
        {
        "role": "user",
        "content": create_prompt()
        }
    ]
    )
    #print(completion.choices[0].message.content)

    markdown_content = extract_markdown_content(completion.choices[0].message.content)

    return markdown_content



def extract_markdown_content(text):
    # Find the last occurrence of opening frontmatter "---"
    lines = text.splitlines()
    first_frontmatter = -1
    last_frontmatter = -1
    
    # Find the first and second "---"
    found_first = False
    for i in range(len(lines)):
        if lines[i].strip() == "---":
            if not found_first:
                first_frontmatter = i
                found_first = True
            else:
                last_frontmatter = i
                break
    
    if first_frontmatter == -1 or last_frontmatter == -1:
        return ""
    
    # Extract content starting from the first frontmatter
    content = lines[first_frontmatter:]
    
    # Remove any trailing ```
    while content and content[-1].strip() == "```":
        content.pop()
    
    # Join the lines back together
    return "\n".join(content)



def update_fm_date(content: str, use_date=datetime.now()) -> str:
    # Get current date in YYYY-MM-DD format
    current_date_str = use_date.strftime('%Y-%m-%d')
    
    # Regular expression to match the date in frontmatter
    pattern = r'(date:\s*)(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2})'
    
    # Replace only the date part while keeping time and timezone
    updated_content = re.sub(pattern, rf'\g<1>{current_date_str}\g<3>', content)
    
    return updated_content

def update_fm_image(markdown_text):
    # 寻找 frontmatter 开始和结束的位置
    lines = markdown_text.split('\n')
    frontmatter_start = -1
    frontmatter_end = -1
    
    for i, line in enumerate(lines):
        if line.strip() == '---':
            if frontmatter_start == -1:
                frontmatter_start = i
            else:
                frontmatter_end = i
                break
    
    if frontmatter_start == -1 or frontmatter_end == -1:
        return markdown_text
        
    # 更新 frontmatter 中的 image 属性
    frontmatter_lines = lines[frontmatter_start+1:frontmatter_end]
    updated_frontmatter = []
    image_updated = False
    
    for line in frontmatter_lines:
        if line.strip().startswith('thumbnail:'):
            updated_frontmatter.append('thumbnail: "feature.png"')
            image_updated = True
        else:
            updated_frontmatter.append(line)
    
    # 组合更新后的文本
    result = []
    result.extend(lines[:frontmatter_start+1])
    result.extend(updated_frontmatter)
    result.extend(lines[frontmatter_end:])
    
    return '\n'.join(result)
def save_article(content, use_date=datetime.now()):
    if not content:
        return False
    
    year = use_date.strftime("%Y")
    month = use_date.strftime("%m")
    date = use_date.strftime("%Y-%m-%d")

    content_updated = update_fm_date(content, use_date)
    content_updated = update_fm_image(content_updated)
    
    # 创建目录结构
    dir_path = f"./blog/{year}"
    os.makedirs(dir_path, exist_ok=True)
    
    # 检查文件是否存在，如果存在则添加后缀
    counter = 0
    while True:
        if counter == 0:
            file_path = f"{dir_path}/{date}.md"
        else:
            file_path = f"{dir_path}/{date}-{counter:02d}.md"
            
        if not os.path.exists(file_path):
            break
        counter += 1
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content_updated)
        print(f"Article saved successfully at: {file_path}")
        return True
    except Exception as e:
        print(f"Error saving article: {e}")
        return False

def process(use_date):
    # 生成文章
    try:
        article_content = generate_article()
        if article_content:
            save_article(article_content, use_date)
        else:
            print("Failed to generate article")
    except Exception as e:
        print(f"Error processing date {use_date}: {e}")

def process_date_range(start_date, end_date):
    current_date = start_date
    while current_date <= end_date:
        print(f'Thread {threading.current_thread().name} processing date: {current_date.strftime("%Y-%m-%d")}')
        for _ in range(3):
            process(current_date)
        current_date += timedelta(days=1)

def batch_process_multi_thread(from_date=datetime.now(), to_date=datetime.now(), num_threads=4):
    # 计算总天数
    total_days = (to_date - from_date).days + 1
    
    # 计算每个线程处理的天数
    days_per_thread = math.ceil(total_days / num_threads)
    
    # 创建线程池
    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        futures = []
        
        # 为每个线程分配日期范围
        for i in range(num_threads):
            start = from_date + timedelta(days=i * days_per_thread)
            end = min(from_date + timedelta(days=(i + 1) * days_per_thread - 1), to_date)
            
            # 如果起始日期已经超过结束日期，就不再创建新线程
            if start > to_date:
                break
                
            # 提交线程任务
            future = executor.submit(process_date_range, start, end)
            futures.append(future)
        
        # 等待所有线程完成
        for future in futures:
            future.result()


if __name__ == "__main__":
    str_from = "2024-11-01"
    str_to = "2024-11-01"
    from_date=datetime.strptime(str_from, '%Y-%m-%d')
    to_date=datetime.strptime(str_to, '%Y-%m-%d')

    #batch_process(from_date, to_date)
    batch_process_multi_thread(from_date, to_date, num_threads=10)