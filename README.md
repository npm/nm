# nm

Manage your `node_modules` as a set of directories on disk.

```console
$ nm rm module-name
module-name removed
$ nm rm module-name
Error: ENOENT: no such file or directory, lstat 'node_modules/wrappyy'
$
```

Try it out with npx:

```console
$ npx nm rm module-name
```

## Description

This is a command line tool for doing physical operations on your
node_modules with some minimal level of `package.json` and
`package-lock.json` awareness.  In contrast to `npm`, it is focused on
physical operations on disk.

## Commands

### rm <pkg>

Remove <pkg> from `node-modules` if it exists.

Planned options: `-r` remove <pkg> and its transitive dependencies.  `-f -r`
remove <pkg> and its transitive dependencies, even if they're also used by
another module.

## Planned Commands

These are not implemented yet.

### ls

Would be what `llmod` outputs.

### install/add

Add packages w/o installing anything else. Read registry auth from `.npmrc` (no `nm login` however, use npm for that).

### --save

A suite of save option that can update `package.json` and `package-lock.json`
