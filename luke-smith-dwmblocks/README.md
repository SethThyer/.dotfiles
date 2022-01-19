# dwmblocks

Modular status bar for dwm written in c.

# Modifying blocks

The statusbar is made from text output from commandline programs.  Blocks are
added and removed by editing the config.h file.

# Luke's build

I have dwmblocks read my preexisting scripts
[here in my dotfiles repo](https://github.com/LukeSmithxyz/voidrice/tree/master/.local/bin/statusbar).
So if you want my build out of the box, download those and put them in your
`$PATH`. I do this to avoid redundancy in LARBS, both i3 and dwm use the same
statusbar scripts.

