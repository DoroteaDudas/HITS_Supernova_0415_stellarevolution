# 0415 - Stellar Evolution

## Short Description

<table align="center">
    <tr>
    <td align="left" style="font-style:italic; font-size:12px; background-color:white">Explore the life of a star!<br>
        Stars are born, evolve and die. <br>
        Investigate how stars of different mass evolve through time by selecting them on the screen!</td>
    </tr>
</table>

The application shows how various types of stars develop through time. The user can observe how stars of different mass evolve differently through time and get more information about every stage of their lives.  

Type of the star is chosen in the "Mass" menu. The user can choose between a brown dwarf and four stars of different sizes (main sequence stars). Various phases in the life of the chosen star (and their duration) can then be seen by using the "Time" menu in the bottom of the screen. Stars are created out of a protostar and eventually end their existence. Additional facts about the current stage of a star’s life and the position in the Hertzsprung-Russell (HR) diagram can be read on the left side of the screen. The HR diagram plots each star on a graph showing the star's brightness against its temperature (color). The main view can be rotated and slightly zoomed (using two fingers / mouse wheel). Three buttons in the lower left corner allow the user to restart the application, change the language (English or German) and get some help. 

Note that the size ratios of the stars are wrong in this application, as we would not be able to achieve the desired learning effect. The differences in star sizes are much larger.

This application is used at the [ESO Supernova Planetarium and Visitor Centre](https://supernova.eso.org/?lang=en), Garching b. München.  
For more details about the project and how applications are run and managed within the exhibition please see [this link](https://gitlab.com/HITS_Supernova/overview).  


## Requirements / How-To

A browser with a WebGL support is needed to run the interactive (start `webgl_Stars.html`).  
If no touchscreen is available the interactive can be operated with the mouse.

## Detailed Information

#### URL parameters

*lang* - language parameter (english as default if not there)


## Credits

This application was developed by the ESO Supernova team at [HITS gGmbH](https://www.h-its.org/en/).  
Idea and coding by Dorotea Dudas, HITS gGmbH. 

#### Code Licensing

* This code is licensed as: [MIT license](LICENSE)
* MIT license:  
    * *jQuery* [source](https://jquery.com/)
    * *jQuery UI Dialog ClickOutside* [source](https://github.com/coheractio/jQuery-UI-Dialog-ClickOutside)    
    * *Three.js* by Mr.doob (Ricardo Cabello) [source](https://threejs.org/)
    * *ShaderParticles.js* by Luke Moody & Lee Stemkoski [ShaderParticleEngine@GitHub](https://github.com/squarefeet/ShaderParticleEngine)
* Shaders:
    * *Star shader* by Dorotea Dudas using:
        * *Lava shader* from [source](https://threejs.org/examples/webgl_shader_lava.html) (MIT license)
        * *Perlin noise shader* by Stefan Gustavson [source](https://github.com/ashima/webgl-noise) (MIT license)
    * *Brown dwarf shader* by Dorotea Dudas using:
        * *Animated warping from static tex* by AmazingThew at ShaderToy [source](https://www.shadertoy.com/view/XlS3Wm) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
        * *Sun shader* (background) by pixartist at ShaderToy [source](https://www.shadertoy.com/view/Xls3D8) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
    * *Protostar Point Cloud shaders* (varying color, size and rotation) by Dorotea Dudas 
    * *White Dwarf Shader* uses:
        * *Animated warping from static tex* by AmazingThew at ShaderToy [source](https://www.shadertoy.com/view/XlS3Wm) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
    * *Nebula with White Dwarf Shader*:
        * *Dusty nebula 4* by Duke (Fazil Abdulin) at ShaderToy [source](https://www.shadertoy.com/view/MsVXWW) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
    * *Supernova Remnant with Neutron Star Shader*:
        * *Supernova remnant* by Duke (Fazil Abdulin) at ShaderToy [source](https://www.shadertoy.com/view/MdKXzc) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
    * *Supernova Remnant with Black Hole Shader*:
        * *Supernova remnant* by Duke (Fazil Abdulin) at ShaderToy [source](https://www.shadertoy.com/view/MdKXzc) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
        * *Black Hole (edit)* by Harha, bloodnok at ShaderToy [source](https://www.shadertoy.com/view/llSGRG) [source](https://www.shadertoy.com/view/XdjXDy) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms) 



#### Image Licensing

* CC BY 4.0: 
    * Optical Milky Way image: original file by S. Brunier [source at ESO](https://www.eso.org/public/images/eso0932a/)
    * Made by Dorotea Dudas:
        * Sprite texture, noise texture (generated with netpbm tools)
        * Red (brown), blue, white dwarf textures; 
          original image *JupiterNormalized2k.jpg* from The Celestia Motherlode [image](http://www.celestiamotherlode.net/catalog/show_addon_details.php?addon_id=981) (Public Domain)
        * Sprite3, sprite4, sprite6, sprite7, sprite8 textures (original from AsterTank: [GitHub](https://github.com/typpo/asterank) [image](https://github.com/typpo/asterank/tree/master/static/img) (MIT License))
        * Nucleosynthesis images made by using:
            * *Lava shader* as outer layers from [source](https://threejs.org/examples/webgl_shader_lava.html) (MIT license)
            * *Sun shader* as core by pixartist at ShaderToy [source](https://www.shadertoy.com/view/Xls3D8) [(CC BY-NC-SA 3.0)](https://www.shadertoy.com/terms)
        * HR diagram images
        * Menu (mass, time) and Icons (except blue navigation icons)
    * Info/Help Screen images by ESO / HITS gGmbH
    * Blue Navigation icons by Design und mehr GmbH
* Cloud, spark, lava textures from three.js (derivatives by Dorotea Dudas) [image](https://github.com/mrdoob/three.js/tree/dev/examples/textures) (MIT License)
* Smoke texture from ShaderParticleEngine [image](https://github.com/squarefeet/ShaderParticleEngine/blob/master/examples/img/smokeparticle.png) (MIT License)








