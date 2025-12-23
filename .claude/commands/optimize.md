---
argument-hint: <file-path>
description: Analyze and optimize a file for performance, memory usage, and bundle size
---

# Code Optimization Analysis

You are tasked with analyzing the file at path: `$ARGUMENTS`

## Analysis Process

1. **Read the target file**
   - Use the Read tool to examine the file at `$ARGUMENTS`
   - Identify the file type (JavaScript, TypeScript, Python, etc.)

2. **Performance Analysis**
   - Identify computational bottlenecks
   - Look for inefficient algorithms (O(n²) loops, unnecessary iterations)
   - Check for redundant calculations
   - Identify expensive operations in hot paths
   - Look for missing memoization opportunities

3. **Memory Optimization**
   - Identify memory leaks (event listeners, timers, closures)
   - Look for unnecessary object/array allocations
   - Check for large data structures that could be streamed
   - Identify duplicate data storage
   - Look for objects that could be pooled or reused

4. **Bundle Size Optimization** (for JavaScript/TypeScript)
   - Identify heavy dependencies that could be replaced
   - Look for unused imports
   - Check for code that could be lazy-loaded
   - Identify opportunities for tree-shaking
   - Look for duplicate dependencies
   - Check for large inline data that could be externalized

## Output Format

Provide your analysis in the following structure:

### 📊 Performance Optimizations

For each issue found:
- **Issue**: Clear description of the problem
- **Impact**: Performance impact (High/Medium/Low)
- **Current Code**: Show the problematic code snippet
- **Optimized Code**: Provide the improved version
- **Explanation**: Why this optimization helps

### 🧠 Memory Optimizations

For each issue found:
- **Issue**: Clear description of the problem
- **Impact**: Memory impact (High/Medium/Low)
- **Current Code**: Show the problematic code snippet
- **Optimized Code**: Provide the improved version
- **Explanation**: Why this optimization helps

### 📦 Bundle Size Optimizations

For each issue found:
- **Issue**: Clear description of the problem
- **Size Impact**: Estimated size reduction
- **Current Code**: Show the problematic code snippet
- **Optimized Code**: Provide the improved version
- **Explanation**: Why this optimization helps

### ✅ Summary

- Total optimizations suggested: [number]
- Estimated performance improvement: [description]
- Estimated memory reduction: [description]
- Estimated bundle size reduction: [description or KB/MB]

## Best Practices

- Only suggest optimizations that have measurable impact
- Avoid micro-optimizations unless in hot paths
- Consider readability vs performance trade-offs
- Suggest profiling tools when appropriate
- If the code is already well-optimized, say so
- Provide concrete, actionable suggestions with code examples
- Focus on real-world impact, not theoretical improvements
