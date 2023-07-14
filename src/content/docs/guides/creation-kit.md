---
title: Creation Kit
description: How to set up the Creation Kit.
---

The Creation Kit for Skyrim Special Edition can be downloaded and installed from Steam. It has its own page on Steam, which you can find [here](https://store.steampowered.com/app/1946180/Skyrim_Special_Edition_Creation_Kit/).

Install the [Creation Kit Fixes](https://www.nexusmods.com/skyrimspecialedition/mods/20061) mod and then install the [Creation Kit Fixes Update](https://www.nexusmods.com/skyrimspecialedition/mods/71371) mod. These should be installed in the Skyrim Special Edition root directory.

Download [Fonix Data](https://www.nexusmods.com/skyrimspecialedition/mods/40971) and place this in the folder `Skyrim Special Edition\Data\Sound\Voice\Processing`. This is needed for the Creation Kit to be able to produce lip files.

## Creation Kit Configuration

- Create a file `CreationKitCustom.ini` in your root `Skyrim Special Edition` directory. This should be where `SkyrimSE.exe` is located.
- Paste the following configuration:

```ini
[AUDIO]
bEnableAudio=0  

[GENERAL]
bAllowMultipleMasterLoads=1
uGridsToLoad=1

[MESSAGES]
bBlockMessageBoxes=1

[Grass]
bAllowCreateGrass=1
bAllowLoadGrass=0

[Papyrus]
sScriptSourceFolder = ".\Data\Scripts\Source"

[Image Space]

bDoMotionBlur= 0
bDoRadialBlur = 0
bDoDepthOfField = 0

[SpeedTree]
iCanopyShadowScale= 256

[LOD]
bDisplayLODTrees = 0
bDisplayLODBuildings = 0

[Water]
bUseWaterReflections=0
bUseWaterHiRes=0

[Display]
iShadowMapResolutionPrimary=1024
iShadowMapResolutionSecondary=512
bDoActorShadows=0
bDrawShadows=0 

[Movement]
iAutoSave Time=5
```