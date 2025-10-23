# slidev

## slidev --help

```bash
slidev --help
slidev [args]

命令：
  slidev [entry]                 Start a local server for Slidev           [默认值]
  slidev build [entry..]         Build hostable SPA
  slidev format [entry..]        Format the markdown file
  slidev theme [subcommand]      Theme related operations
  slidev export [entry..]        Export slides to PDF
  slidev export-notes [entry..]  Export slide notes to PDF

```

## slidev build --help

```bash
slidev build --help
slidev build [entry..]

Build hostable SPA

位置：
  entry  path to the slides markdown entry               [数组] [默认值: "slides.md"]

选项：
  -t, --theme            override theme                                    [字符串]
      --output           path to the output                                [字符串]
      --format           output format   [字符串] [可选值: "pdf", "png", "pptx", "md"]
      --timeout          timeout for rendering the print page               [数字]
      --wait             wait for the specified ms before exporting         [数字]
      --wait-until       wait until the specified event before exporting each sl
                         ide
                  [字符串] [可选值: "networkidle", "load", "domcontentloaded", "none"]
      --range            page ranges to export, for example "1,4-5,6"      [字符串]
      --dark             export as dark theme                               [布尔]
  -c, --with-clicks      export pages for every clicks                      [布尔]
      --executable-path  executable to override playwright bundled browser [字符串]
      --with-toc         export pages with outline                          [布尔]
      --per-slide        slide slides slide by slide. Works better with global c
                         omponents, but will break cross slide links and TOC in
                         PDF                                                [布尔]
      --scale            scale factor for image export                      [数字]
      --omit-background  export png pages without the default browser background
                                                                            [布尔]
  -o, --out              output dir                          [字符串] [默认值: "dist"]
      --base             output base. Example: /demo/                      [字符串]
  -d, --download         allow download as PDF                              [布尔]
      --inspect          enable the inspect plugin for debugging
                                                               [布尔] [默认值: false]
  -h, --help             显示帮助信息                                             [布尔]
  -v, --version          显示版本号                                              [布尔]

```

## references

| item              | link(s)                       |
| ----------------- | ----------------------------- |
| Bundled Languages | https://shiki.style/languages |
| Themes            | https://shiki.style/themes    |
