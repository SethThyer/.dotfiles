#!/bin/sh

# super + print
flameshot gui
# super + e
qutebrowser
# super + shift + e
brave
# super + a
4code

# XF86AudioMute
pamixer --toggle-mute
# XF86AudioLowerVolume
pamixer -d 5
# XF86AudioRaiseVolume
pamixer -i 5

# shift + XF86AudioPlay
mpc toggle
# shift + XF86AudioPrev
mpc prev
# shift + XF86AudioNext
mpc next             

# XF86AudioPlay
playerctl play-pause
# XF86AudioPrev
playerctl previous
# XF86AudioNext
playerctl next

# XF86MonBrightnessUp
xbacklight -inc 10
# XF86MonBrightnessDown
xbacklight -dec 10
