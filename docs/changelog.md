# changlog  


## install  generate-changelog  

```bash
npm install generate-changelog -g
```

## commit message pattern   

`type(category): description [flags]`


- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as a the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit
- `BREAKING CHANGE` - to note the reason for a breaking change within the commit


```bash
git config --global core.editor vim
```

## Guiding Principles
- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each version is displayed.
- Mention whether you follow Semantic Versioning.

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.


## changelog generate   

```bash
changelog generate
```

## references   

| item                | link(s)                                        |
| ------------------- | ---------------------------------------------- |
| keepachangelog      | https://keepachangelog.com/en/1.0.0/           |
| conventionalcommits | https://www.conventionalcommits.org/en/v1.0.0/ |
