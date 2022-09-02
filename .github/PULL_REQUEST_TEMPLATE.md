### Card

Link to the card in Notion

### Context (for chores/features)

A brief explanatory description explaining the scope of the pull request, any kind of context we want to provide to the reviewers to understand, or some guidance, instructions, or steps to execute the code.

### Problem (for bugs)

A brief explanatory description of the root cause of the problem, to ensure that we understood the problem and we are fixing the root cause of it.

### Current result (for bugs)

Describe the current behavior without the new code changes.

### Expected result (for bugs)

Describe what the behavior should be with the new code changes.

### Demo (For all)

- For UI issues like margins, paddings, colors, or the like, we can add a screenshot showing the before and after the fix.
- For complex bugs, features or chores, we should attach a video to the pull request, showing the different flows, cases, or scenarios involved.
- Why is this important?
  - It will help the reviewer(s) to understand the context faster.
  - It will help us quickly identify some potential issues just by watching the demo.

---
Submitter and reviewer, remember to check the items below:

- [ ] Execute the lint and fix linter errors.
- [ ] Create unit tests for your code changes.
- [ ] Perform a QA session on the change.
