---
title: 'Flamewerk - Documentation'
layout: client
description: 'meta description of the page'
---

:::BlockClientSidePanel
::BlockProseContent



:ComponentLink{title="Getting Started" route="/introduction" content="Introduction into flamewerk app building"}


:ComponentLink{title="Local Setup" route="/local-setup" content="Learn how to setup your development enviroment on you computer"}

:ComponentLink{title="Project Configurations" route="/project-config" content="Copy a clean or template project config"}


::

:::

:::BlockClientMainPanel








::BlockProseContentMain

# Local Setup

## 🔥 Quick Development Start 
You will need [Node](https://nodejs.org) v16.19.0  & [Git Cli](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.  
Use the following Terminal Commands for cloning the repository to your computer.

#### 1) Clone Flamewerk Startup 
::BlockProseCode
  ```javascript
  git clone https://github.com/flamewerk/startup.git
  ```
::

Alternativly you can also [download the zip](https://github.com/KevinGaethofs/KevinGaethofs/archive/refs/heads/main.zip) of the startup template.

#### 2) Flamewerk Local Installation
Execute the commpands from root of the Startup directory. 


::BlockProseCode
  ```javascript
  npm install
  ```
::
::BlockProseCode
  ```javascript
  npm run dev
  ```
::

✨ Congratulations you now have the startup folder running on <a href="http://localhost:3000" target="_blank">localhost:3000</a> ✨  

\
\
🪄 Now for some magic 🪄  
Take a look at our [demo config files](/docs/demos) or learn how to mix and match and write your own.  
\
Want to learn more ? Check out the [Flamewerk Basics](/docs/basics) or [Manifesto document](/docs/manifesto).  
 
::








::BlockProseContentMain



## Software Prerequisites
You will need the following installed on your system:‌‌

- Nodejs ( v14.19.2 )

- Git

- Yarn

- Code Editor ( VS code )

### Setup Test:

You can test if the packages are installed by running the following commands: 
_____  
**node -v**  
*Expected output:* 14.19.2
_____  
**yarn -v**  
*Expected output:* >1.22.18 
_____ 
**git -v**  
*Expected output:* >2.37.1
_____


::
:::