#!/bin/bash
STATE="Playing ♫"
if [[ "$(mpc status %state%)" = "paused" ]]; then
  STATE="Paused  ♫"  
fi

if [[ -z $(mpc --format '%title%' current) ]]; then
	notify-send -i "~/Music/.defthumb.jpeg" -t 4400 -u Low "$STATE" "$(mpc --format '%file%' current)"
else
	ALBUM="$(mpc --format '%album%' current)"
	ARTIST="$(mpc --format '%artist%' current)"
	ICO_PATH=$(find "~/Music/$ARTIST/.thumbnails" -maxdepth 1 -iregex ".*/.*\(${ALBUM}\).*[.]\(jpe?g\|png\|gif\|jpeg\|jpg\)")           

	notify-send -i "$ICO_PATH" -t 4400 -u Low "$STATE" "$(mpc --format '%title% \n%artist% - %album%' current)"
fi
