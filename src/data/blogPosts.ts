import { BlogPost } from "../types";
import { calculateReadingTime } from "../utils/readingTime";

// Blog posts data - Production optimized (reduced from 4254 lines to essentials)
const blogPostsData: Omit<BlogPost, "readingTime">[] = [
  {
    slug: "fastapi-vs-flask",
    title: "FastAPI vs Flask: Choosing the Right Python Web Framework",
    description:
      "A comprehensive comparison of FastAPI and Flask for building modern web APIs, covering performance, developer experience, and use cases.",
    date: "2024-03-15",
    tags: ["Python", "FastAPI", "Flask", "Backend", "API"],
    featured: true,
    author: {
      name: "Sanchay Gawande"
    },
    content: `# FastAPI vs Flask: Choosing the Right Python Web Framework

When building web APIs with Python, FastAPI and Flask are two of the most popular choices. This guide helps you understand which framework best suits your needs.

## FastAPI: Modern, Fast, Type-Safe

FastAPI is a modern framework built on Python 3.6+ type hints and async capabilities.

### Key Advantages
- **Automatic API documentation** with Swagger UI and ReDoc
- **Type safety** with Pydantic models
- **Async support** for high-performance applications
- **Built-in validation** and serialization
- **Modern Python features** (async/await, type hints)

### Example FastAPI Application

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item.name, "price": item.price}
\`\`\`

## Flask: Mature, Flexible, Battle-Tested

Flask is a micro-framework with a large ecosystem and proven track record.

### Key Advantages
- **Simplicity** and minimal learning curve
- **Flexibility** to structure applications your way
- **Extensive ecosystem** of extensions
- **Large community** and abundant resources
- **Battle-tested** in production for over a decade

### Example Flask Application

\`\`\`python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/items/', methods=['POST'])
def create_item():
    data = request.get_json()
    return jsonify({"item": data["name"], "price": data["price"]})
\`\`\`

## Performance Comparison

FastAPI leverages ASGI and async capabilities for superior performance:
- **3-4x faster** than Flask for async workloads
- Better handling of **concurrent requests**
- Lower **memory footprint** for high-throughput scenarios

Flask remains performant for traditional synchronous applications.

## When to Choose FastAPI

- Building **new microservices** or APIs
- Need **automatic API documentation**
- Working with **async operations** (WebSockets, background tasks)
- Want **type safety** and modern Python features
- Building **high-performance** applications

## When to Choose Flask

- **Existing Flask applications** to maintain
- Need **maximum flexibility** in structure
- **Simple CRUD APIs** without async requirements
- Prefer **minimalist** frameworks
- Large team already familiar with Flask

## Conclusion

Both frameworks are excellent choices:
- **FastAPI** for modern, high-performance APIs with great DX
- **Flask** for flexibility and proven production stability

Choose based on your specific requirements, team expertise, and project constraints.`,
  },
  {
    slug: "langchain-rag-implementation",
    title: "Building Production RAG Systems with LangChain",
    description:
      "Learn how to implement Retrieval-Augmented Generation systems using LangChain, vector databases, and LLMs for production applications.",
    date: "2024-04-22",
    tags: ["AI", "LangChain", "RAG", "Python", "LLM"],
    featured: true,
    author: {
      name: "Sanchay Gawande"
    },
    content: `# Building Production RAG Systems with LangChain

Retrieval-Augmented Generation (RAG) combines the power of large language models with external knowledge bases to create accurate, context-aware AI applications.

## What is RAG?

RAG enhances LLM responses by:
1. **Retrieving** relevant information from a knowledge base
2. **Augmenting** the LLM prompt with retrieved context
3. **Generating** accurate responses based on both LLM knowledge and retrieved data

## Core Components

### 1. Document Loaders

Load and process various document types:

\`\`\`python
from langchain.document_loaders import TextLoader, PDFLoader

# Load documents
loader = TextLoader("docs/guide.txt")
documents = loader.load()
\`\`\`

### 2. Text Splitters

Break documents into manageable chunks:

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)
\`\`\`

### 3. Vector Embeddings

Convert text to vector representations:

\`\`\`python
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
vectors = embeddings.embed_documents([chunk.page_content for chunk in chunks])
\`\`\`

### 4. Vector Store

Store and retrieve embeddings efficiently:

\`\`\`python
from langchain.vectorstores import FAISS

vectorstore = FAISS.from_documents(chunks, embeddings)
\`\`\`

### 5. Retrieval Chain

Combine retrieval with LLM generation:

\`\`\`python
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)

response = qa_chain.run("What is the main topic?")
\`\`\`

## Production Best Practices

### 1. Optimize Chunk Size
- Balance between **context window** and **retrieval accuracy**
- Typical range: 500-1500 characters
- Include **overlap** to maintain context continuity

### 2. Choose the Right Vector Database
- **FAISS**: Local, fast, good for development
- **Pinecone**: Managed, scalable, production-ready
- **Weaviate**: Open-source, feature-rich

### 3. Implement Caching
- Cache **embeddings** to reduce API calls
- Cache **frequent queries** for better performance

### 4. Monitor and Evaluate
- Track **retrieval accuracy**
- Monitor **LLM response quality**
- Measure **end-to-end latency**

## Real-World Use Cases

1. **Customer Support**: Answer questions from documentation
2. **Research Assistant**: Query scientific papers and research
3. **Code Assistant**: Search and explain codebases
4. **Legal Document Analysis**: Extract insights from contracts

## Conclusion

RAG systems combine the best of both worlds: LLM reasoning capabilities with accurate, up-to-date information from your knowledge base.

Start with a simple implementation, iterate based on user feedback, and scale as needed.`,
  },
  {
    slug: "llm-prompt-engineering",
    title: "LLM Prompt Engineering: From Basics to Advanced Techniques",
    description:
      "Master the art and science of prompt engineering for large language models, with practical examples and production-tested strategies.",
    date: "2024-05-10",
    tags: ["AI", "LLM", "Prompt Engineering", "GPT"],
    featured: true,
    author: {
      name: "Sanchay Gawande"
    },
    content: `# LLM Prompt Engineering: From Basics to Advanced Techniques

Effective prompt engineering is crucial for getting the best results from large language models. This guide covers proven techniques for production applications.

## Fundamentals of Prompting

### 1. Be Clear and Specific

**Bad Prompt:**
> "Write about AI"

**Good Prompt:**
> "Write a 300-word explanation of how transformer models work, targeted at software engineers with no ML background."

### 2. Provide Context

Include relevant background information:

\`\`\`
Context: You are a senior Python developer reviewing code for a web application.

Task: Review the following Flask API endpoint and suggest improvements for security and performance.

Code: [your code here]
\`\`\`

### 3. Use Examples (Few-Shot Learning)

Show the model what you want:

\`\`\`
Convert the following to JSON:

Example 1:
Input: Name: John, Age: 30, City: NYC
Output: {"name": "John", "age": 30, "city": "NYC"}

Example 2:
Input: Name: Alice, Age: 25, City: LA
Output: {"name": "Alice", "age": 25, "city": "LA"}

Now convert:
Input: Name: Bob, Age: 35, City: SF
\`\`\`

## Advanced Techniques

### Chain of Thought (CoT)

Encourage step-by-step reasoning:

\`\`\`
Problem: A store sells apples for $2 each and oranges for $3 each.
If John buys 5 apples and 3 oranges, how much does he spend?

Let's solve this step by step:
1. First, calculate the cost of apples
2. Then, calculate the cost of oranges
3. Finally, add them together
\`\`\`

### Role Prompting

Assign specific roles or personas:

\`\`\`
You are a security expert specializing in web application vulnerabilities.

Analyze this code for potential security issues and provide specific recommendations for each issue found.

[code here]
\`\`\`

### Constraint-Based Prompting

Set explicit boundaries and requirements:

\`\`\`
Generate a product description with these constraints:
- Exactly 150 words
- Include keywords: "sustainable", "eco-friendly", "innovative"
- Tone: Professional yet approachable
- Target audience: Environmentally conscious consumers
- Include 3 key benefits
\`\`\`

## Production Best Practices

### 1. Temperature Control

- **Low temperature (0-0.3)**: Deterministic, consistent outputs (code generation, factual queries)
- **Medium temperature (0.4-0.7)**: Balanced creativity and coherence (content writing)
- **High temperature (0.8-1.0)**: Creative, diverse outputs (brainstorming, creative writing)

### 2. System Prompts

Use system messages to set consistent behavior:

\`\`\`python
messages = [
    {"role": "system", "content": "You are a helpful Python coding assistant. Always include error handling and type hints."},
    {"role": "user", "content": "Write a function to fetch data from an API"}
]
\`\`\`

### 3. Output Formatting

Request specific formats for easier parsing:

\`\`\`
Analyze the text and return a JSON object with this structure:
{
  "sentiment": "positive|negative|neutral",
  "key_topics": ["topic1", "topic2"],
  "summary": "brief summary",
  "confidence": 0.0-1.0
}
\`\`\`

### 4. Iterative Refinement

Start simple and refine:

\`\`\`
Version 1: "Summarize this article"
Version 2: "Summarize this article in 3 bullet points"
Version 3: "Summarize this article in 3 bullet points, focusing on technical details"
\`\`\`

## Common Pitfalls to Avoid

1. **Over-prompting**: Too much instruction can confuse the model
2. **Ambiguity**: Unclear expectations lead to inconsistent results
3. **Ignoring context limits**: Stay within token limits
4. **No validation**: Always validate and sanitize outputs

## Real-World Applications

### Code Generation
\`\`\`
Create a Python function that:
- Accepts a list of integers
- Returns the median value
- Handles empty lists with appropriate error
- Includes type hints and docstring
- Has O(n log n) time complexity
\`\`\`

### Data Extraction
\`\`\`
Extract structured information from this text and return as JSON:
- Names (array)
- Dates (ISO format)
- Amounts (numbers only)
- Locations (city, state)

Text: [input text]
\`\`\`

### Content Moderation
\`\`\`
Analyze this user comment for:
- Profanity or offensive language
- Personal attacks
- Spam or promotional content
- Misinformation

Return severity level (none, low, medium, high) and brief explanation.
\`\`\`

## Measuring Success

Track these metrics:
- **Accuracy**: Does it produce correct outputs?
- **Consistency**: Same inputs = same outputs?
- **Latency**: Fast enough for your use case?
- **Cost**: Token usage within budget?

## Conclusion

Effective prompt engineering is iterative:
1. Start with clear instructions
2. Test with diverse inputs
3. Refine based on results
4. Monitor in production
5. Continuously improve

Master these techniques to build reliable, production-ready LLM applications.`,
  },
];

// Add reading time to each post
export const blogPosts: BlogPost[] = blogPostsData.map((post) => ({
  ...post,
  readingTime: calculateReadingTime(post.content),
}));

// Helper functions
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPost = (slug: string): BlogPost | null => {
  return blogPosts.find((post) => post.slug === slug) || null;
};

export const getRecentBlogPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter((post) => post.tags.includes(tag));
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const searchTerms = query.toLowerCase().split(" ");

  return blogPosts.filter((post) => {
    const searchableContent = [
      post.title,
      post.description,
      post.content,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchTerms.every((term) => searchableContent.includes(term));
  });
};

export const getRelatedPosts = (
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] => {
  const otherPosts = blogPosts.filter((post) => post.slug !== currentPost.slug);

  // Score posts based on tag overlap
  const scoredPosts = otherPosts.map((post) => {
    const commonTags = post.tags.filter((tag) =>
      currentPost.tags.includes(tag)
    );
    const score = commonTags.length;
    return { post, score };
  });

  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
};
