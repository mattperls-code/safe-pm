# **Safe-PM**

By Matthew Perlman and Rafayel Amirkhanyan

<br/>

## Why You Should Use Safe-PM?

As frequent node.js and NPM users, we always come accross the problem of installing dependencies in the incorrect directory, and having moments before we realize. So we made a small automation tool that wraps around node.js and helps prevent such small but annoying mistakes.

<br/>

## **How To Install**

<br/>

> `npm install safe-pm`

Only Supports Bash and ZSH

<br/>

# Commands
- Help
- Init
- Install
- Uninstall
- Reset

<br/>

## **Help**

> `safe-pm help`

**Description**

Lists all commands

<br/>

## **Init**

> `safe-pm init` or `safe-pm -y`

**Description**

Initiliazes a package.json. Use -y to use NPM's default package.json template.

<br/>

## **Install**

> `safe-pm install <package-name>` or `safe-pm i <package-name>`

**Description**

Installs dependency using NPM. Checks if package.json is present so that user does not install dependency in a wrong directory

<br/>

## **Uninstall**

> `safe-pm uninstall <package-name>` or `safe-pm ui <package-name>`


Uninstalls dependency using NPM

<br/>

## **Reset**

> `safe-pm reset`

**Description**

Deletes package.json, package-lock.json, and node_modules from current directory