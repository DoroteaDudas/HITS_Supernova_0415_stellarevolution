{//GUI dialogs
	var dialog_HR_image_width = 400;
 	{//HR images
		var image_HRdiagram_default 		= 'Images/HRdiagram/HR.png'; 
		var image_HRdiagram_default_DE		= 'Images/HRdiagram/HR_DE.png';
		var image_HRdiagram_Proto 		= 'Images/HRdiagram/HR_Proto.png';
		var image_HRdiagram_Proto_DE 		= 'Images/HRdiagram/HR_Proto_DE.png';
		var image_HRdiagram_Brown		= 'Images/HRdiagram/HR_Brown.png';
		var image_HRdiagram_Brown_DE 		= 'Images/HRdiagram/HR_Brown_DE.png';
		var image_HRdiagram_Red   		= 'Images/HRdiagram/HR_Red.png';
		var image_HRdiagram_Red_DE   		= 'Images/HRdiagram/HR_Red_DE.png';
		var image_HRdiagram_WhiteDwarf 		= 'Images/HRdiagram/HR_WhiteDwarf.png';	
		var image_HRdiagram_WhiteDwarf_DE	= 'Images/HRdiagram/HR_WhiteDwarf_DE.png';
		var image_HRdiagram_Yellow		= 'Images/HRdiagram/HR_Yellow.png';
		var image_HRdiagram_Yellow_DE		= 'Images/HRdiagram/HR_Yellow_DE.png';
		var image_HRdiagram_RedSuper		= 'Images/HRdiagram/HR_RedSuper.png';
		var image_HRdiagram_RedSuper_DE		= 'Images/HRdiagram/HR_RedSuper_DE.png';
		var image_HRdiagram_White 		= 'Images/HRdiagram/HR_White.png';
		var image_HRdiagram_White_DE 		= 'Images/HRdiagram/HR_White_DE.png';
		var image_HRdiagram_Blue 		= 'Images/HRdiagram/HR_Blue.png';
		var image_HRdiagram_Blue_DE 		= 'Images/HRdiagram/HR_Blue_DE.png';
		var image_HRdiagram_BlueSuper 		= 'Images/HRdiagram/HR_BlueSuper.png';
		var image_HRdiagram_BlueSuper_DE 	= 'Images/HRdiagram/HR_BlueSuper_DE.png';
	}
	//HR images used:
			//brown dwarf:	image_HRdiagram_Proto	image_HRdiagram_Brown
			//red dwarf	image_HRdiagram_Proto	image_HRdiagram_Red					image_HRdiagram_WhiteDwarf
			//yellow:	image_HRdiagram_Proto	image_HRdiagram_Yellow	image_HRdiagram_RedSuper	image_HRdiagram_WhiteDwarf
			//white:	image_HRdiagram_Proto	image_HRdiagram_White	image_HRdiagram_RedSuper	(neutron star)image_HRdiagram_default
			//blue:		image_HRdiagram_Proto	image_HRdiagram_Blue	image_HRdiagram_BlueSuper	(black hole)image_HRdiagram_default	
	//texts used:
		//texts in mass menu:
			//		AddDialog("#dialogMain", protostar_blue);	//protostar_white, protostar_yellow, protostar_orange, protostar_red
		//texts in time menu:
			//proto: 	AddDialog("#dialogMain", protostar_blue);	//protostar_white, protostar_yellow, protostar_orange, protostar_red
			//main:  	AddDialog("#dialogMain", main_blue);		//main_white, main_yellow, main_orange, main_red
			//post:		AddDialog("#dialogMain", post_blue);		//post_white, post_yellow
			//death:	AddDialog("#dialogMain", death_blue);		//death_white, death_yellow, death_orange			

	//current all-in-one texts
	{//ESO protostar texts				(protostar_red, protostar_red_DE, protostar_orange, protostar_orange_DE, protostar_yellow, protostar_yellow_DE, protostar_white, protostar_white_DE, protostar_blue, protostar_blue_DE)
	//Protostern
	var temp_DE_proto = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Die Schwerkraft bewirkt, dass sich große molekulare Wolken aus Staub und Gas allmählich zusammenballen und dichte Kerne bilden."
		+ " Diese Kerne werden als Protosterne bezeichnet. Sie markieren die erste Stufe der Sternentstehung. Im Laufe der Zeit zieht ein Protostern immer mehr Materie aus seiner ihn umgebenden Wolke an."
		+ " Sie kontrahiert infolge der Schwerkraft weiter, wird immer heißer und dichter – aber nicht heiß und dicht genug, um eine Kernfusion auszulösen.</div><br><br><br>"; 
	var protostar_blue_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von mehr als 25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostern</font></div><br>"
		+ temp_DE_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto_DE+"\"></div>";
	var protostar_white_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 8–25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostern</font></div><br>"
		+ temp_DE_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto_DE+"\"></div>";
	var protostar_yellow_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,4–8 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostern</font></div><br>"
		+ temp_DE_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto_DE+"\"></div>";
	var protostar_orange_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,08–0,4 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostern</font></div><br>"
		+ temp_DE_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto_DE+"\"></div>";
	var protostar_red_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Braunen Zwergs<br>mit weniger als 0,08 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostern</font></div><br>"
		+ temp_DE_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto_DE+"\"></div>";

	//Protostar
	var temp_EN_proto = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Gravity causes large molecular clouds of dust and gas to gradually contract over time, developing dense cores."
		+ " These cores are called protostars. They mark the first stage of stellar evolution. Over time, a protostar attracts more and more matter from its surrounding cloud."
		+ " It keeps contracting under gravity, gradually becoming hotter and denser — although not hot and dense enough to start nuclear fusion.</div><br><br><br><br>";  
	var protostar_blue = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of more than 25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostar</font></div><br>"
		+ temp_EN_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto+"\"></div>";
	var protostar_white = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 8-25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostar</font></div><br>"
		+ temp_EN_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto+"\"></div>";
	var protostar_yellow = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.4-8 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostar</font></div><br>"
		+ temp_EN_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto+"\"></div>";
	var protostar_orange = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.08-0.4 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostar</font></div><br>"
		+ temp_EN_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto+"\"></div>";
	var protostar_red = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Brown dwarf,<br>with less than 0.08 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Protostar</font></div><br>"
		+ temp_EN_proto
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Proto+"\"></div>";
	}
	{//ESO main sequence texts + brown dwarf	(main_red, main_red_DE, main_orange, main_orange_DE, main_yellow, main_yellow_DE, main_white, main_white_DE, main_blue, main_blue_DE)
// 	Brauner Zwerg
	var temp_DE_dwarf = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Um Wasserstoff zu fusionieren und Energie zu erzeugen, müssen Protosterne mehrere Millionen Grad Celsius erreichen. Dazu sind große Gravitationsdrücke erforderlich, d.h. eine Masse von mindestens 8% der Sonne."
		+ " Protosterne, die niemals massereich oder heiß genug werden, um diese Fusion zu beginnen, werden Braune Zwerge genannt.<br><br>"
		+ " Fusionsprozesse finden nicht statt, doch geben Braune Zwerge infolge des anfänglichen Zusammenbruchs der Materie in ihrem Kern weiterhin eine geringe Menge an Energie ab.</div><br>";
// 	Hauptreihenstern
	var temp_DE_main = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Die meisten Sterne im Universum, auch die Sonne, sind Hauptreihensterne. Sie unterscheiden sich in Größe, Masse und Helligkeit, aber alle setzen riesige Mengen an Energie frei, indem sie Wasserstoff zu Helium verschmelzen."
		+ " Die von diesen Fusionsreaktionen freigesetzte Energie erzeugt im Stern einen Druck nach außen, der der einwärts gerichteten, kontrahierenden Gravitation entgegenwirkt. Dadurch befindet sich der Stern in einem Gleichgewicht."
		+ " Wasserstofffusion kann in Sternen mit mindestens 80% der Masse der Sonne stattfinden und Hauptreihensterne können theoretisch das 150-Fache der Masse der Sonne erreichen."
		+ " Diese Phase im Leben eines Sterns kann Millionen bis Milliarden Jahre dauern.</div>";
	var main_blue_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von mehr als 25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Hauptreihenstern</font></div><br>"
		+ temp_DE_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Blue_DE+"\"></div>";
	var main_white_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 8–25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Hauptreihenstern</font></div><br>"
		+ temp_DE_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_White_DE+"\"></div>";
	var main_yellow_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,4–8 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Hauptreihenstern</font></div><br>"
		+ temp_DE_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Yellow_DE+"\"></div>";
	var main_orange_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,08–0,4 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Hauptreihenstern</font></div><br>"
		+ temp_DE_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Red_DE+"\"></div>";
	var main_red_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Braunen Zwergs<br>mit weniger als 0,08 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Brauner Zwerg</font></div><br>"
		+ temp_DE_dwarf
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Brown_DE+"\"></div>";		
	
// 	Brown Dwarf
	var temp_EN_dwarf = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">To begin fusing hydrogen and therefore to produce energy, protostars need to reach millions of degrees Celsius. For this, large gravitational pressures are needed, i.e. a mass of at least 8% of the Sun."
		+ " Protostars that never become massive or hot enough for this fusion to begin are called brown dwarfs.<br><br>"
		+ " While they lack fusion processes, they still radiate a small amount of energy due to the initial collapse of matter at their core.</div><br><br><br>";
// 	Main Sequence Star  
	var temp_EN_main = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">The majority of stars in the Universe, including the Sun, are main sequence stars. These stars vary in size, mass and brightness, but they all release huge amounts of energy by fusing hydrogen to helium."
		+ " The energy released from these fusion reactions creates outward pressure in the star, which counters the inward, contracting force of gravity — meaning the star is in a state of equilibrium."
		+ " Hydrogen fusion can take place in stars with at least 80% of the mass of the Sun, and main sequence stars can theoretically reach 150 times the mass of the Sun."
		+ " This phase in a star’s life can last millions to billions of years.</div><br><br>";
	var main_blue = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of more than 25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Main Sequence Star</font></div><br>"
		+ temp_EN_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Blue+"\"></div>";
	var main_white = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 8-25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Main Sequence Star</font></div><br>"
		+ temp_EN_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_White+"\"></div>";
	var main_yellow = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.4-8 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Main Sequence Star</font></div><br>"
		+ temp_EN_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Yellow+"\"></div>";
	var main_orange = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.08-0.4 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Main Sequence Star</font></div><br>"
		+ temp_EN_main
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Red+"\"></div>";
	var main_red = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Brown dwarf,<br>with less than 0.08 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Brown Dwarf</font></div><br>"
		+ temp_EN_dwarf
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_Brown+"\"></div>";		
	}
	{//ESO post-main sequence texts			(post_yellow, post_yellow_DE, post_white, post_white_DE, post_blue, post_blue_DE)
// 	Nach-Hauptreihenstern
	var temp_DE_post = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Ein Stern verlässt die Hauptreihe, wenn sein Kern keinen Wasserstoff mehr enthält, der zu Helium verschmolzen werden kann."
		+ " Jetzt fehlt der Druck nach außen, der bisher der Schwerkraft entgegenwirkte. Der Kern zieht sich infolge der Schwerkraft zusammen und wird immer heißer und dichter."
		+ " Unter diesen Bedingungen können nun auch Helium und noch schwerere Elemente verschmelzen. Dadurch werden unvorstellbare Mengen an Wärme und Energie freigesetzt, was zu einem Druck nach außen führt, der die äußeren Schichten des Sterns ausdehnt."
		+ " Dies führt zu einer drastischen Vergrößerung des Sterns. Der Stern ist nun ein Riese und wird in dieser Phase bleiben, bis ihm der Brennstoff ausgeht.</div>";
	var post_blue_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von mehr als 25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Nach-Hauptreihenstern</font></div><br>"
		+ temp_DE_post
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_BlueSuper_DE+"\"></div>";
	var post_white_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 8–25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Nach-Hauptreihenstern</font></div><br>"
		+ temp_DE_post
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_RedSuper_DE+"\"></div>";
	var post_yellow_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,4–8 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Nach-Hauptreihenstern</font></div><br>"
		+ temp_DE_post
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_RedSuper_DE+"\"></div>";		

// 	Post-Main Sequence Star
	var temp_EN_post = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">A star enters the post-main sequence phase when there is no more hydrogen to fuse into helium in its core."
		+ " No longer generating the outward pressure to hold itself up against gravity, the core contracts, becoming even hotter and denser."
		+ " Under these conditions, helium and even heavier elements can fuse, releasing unimaginable amounts of heat and energy, and leading to outward pressures that expand the outer layers of the star, leading to a drastic increase of the size of the star."
		+ " The star is now a giant, a phase it will stay in, until it runs out of fuel.</div><br><br><br>";
	var post_blue = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of more than 25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Post-Main Sequence Star</font></div><br>"
		+ temp_EN_post
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_BlueSuper+"\"></div>";
	var post_white = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 8-25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Post-Main Sequence Star</font></div><br>"
		+ temp_EN_post
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_RedSuper+"\"></div>";
	var post_yellow = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.4-8 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Post-Main Sequence Star</font></div><br>"
		+ temp_EN_post
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_RedSuper+"\"></div>";
	}
	{//ESO death texts				(death_orange, death_orange_DE, death_yellow, death_yellow_DE, death_white, death_white_DE, death_blue, death_blue_DE)
// 	Weißer Zwerg mit planetarischem Nebel
	var temp_DE_nebula = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Wenn einem Stern mit einer Masse zwischen 0,08 und 8 Sonnen der Wasserstoff im Kern vollständig ausgegangen ist, wirft er seine äußeren Schichten ab und sein Kern zieht sich zu einem Weißen Zwerg zusammen: ein sternförmiges Überbleibsel von der Größe der Erde."
		+ " Der dichte, heiße Weiße Zwerg gibt intensive Strahlung ab. Er beleuchtet das Gas, das einst die äußeren Schichten des Sterns bildete und das sich nun langsam vom Stern weg ausdehnt."
		+ " Wir nennen diese expandierenden Gaswolken planetarische Nebel."
		+ " Nach und nach kühlt der Weiße Zwerg ab, bis sich seine Temperatur der Hintergrundtemperatur des Universums angeglichen hat – dieser Prozess dauert hunderte Milliarden Jahre. 95% aller Sterne im Universum sterben wohl als Weiße Zwerge.</div>";
// 	Neutronenstern mit Supernova-Überrest
	var temp_DE_neutron = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Sterne mit dem 8- bis 25-Fachen der Masse der Sonne sind heiß genug, um in ihrem Kern Elemente bis hin zu Eisen zu verschmelzen."
		+ " Geht ihnen aber der Treibstoff aus, können sie sich nicht mehr gegen die enorme Schwerkraft behaupten. Plötzlich gewinnt die Schwerkraft, der Stern bricht in sich zusammen und bläst sein äußeres Material in einer gigantischen Supernova-Explosion heraus."
		+ " Die immense Schwerkraft des kollabierenden Sterns zermalmt Protonen und Elektronen zu Neutronen und hinterlässt die kleinsten und dichtesten Sterne, die man kennt: Neutronensterne."
		+ " Neutronensterne sind etwa so groß wie eine Stadt, enthalten aber die Masse von bis zu drei Sonnen.</div><br>";
// 	Schwarzes Loch mit Supernova-Überrest
	var temp_DE_hole = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Sterne mit mindestens 25-facher Masse unserer Sonne sind heiß genug, um in ihrem Kern Elemente bis hin zu Eisen zu verschmelzen."
		+ " Geht ihnen aber der Treibstoff aus, können sie sich nicht mehr gegen die enorme Schwerkraft behaupten. Plötzlich gewinnt die Schwerkraft, der Stern bricht in sich zusammen und bläst sein äußeres Material in einer gigantischen Supernova-Explosion heraus."
		+ " Der verbleibende massereiche Kern bricht zusammen. Er wird so dicht und seine Oberflächengravitation so stark, dass sich nicht einmal Licht aus seinem Griff befreien kann: Der Stern ist zu einem Schwarzen Loch geworden.</div><br><br>";
	var death_blue_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von mehr als 25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Schwarzes Loch mit Supernova-Überrest</font></div><br>"
		+ temp_DE_hole
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_default_DE+"\"></div>";
	var death_white_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 8–25 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Neutronenstern mit Supernova-Überrest</font></div><br>"
		+ temp_DE_neutron
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_default_DE+"\"></div>";
	var death_yellow_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,4–8 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Weißer Zwerg mit planetarischem Nebel</font></div><br>"
		+ temp_DE_nebula
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_WhiteDwarf_DE+"\"></div>";
	var death_orange_DE = "<br><span><font size=\"5\">Lebenszyklus</font><br><font color=\"#00aaff\" size=\"5\">eines Hauptreihensterns<br>mit einer Masse von 0,08–0,4 Sonnenmassen</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Weißer Zwerg</font></div><br>"
		+ temp_DE_nebula
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_WhiteDwarf_DE+"\"></div>";		
	
// 	White dwarf with planetary nebula
	var temp_EN_nebula = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">When a star with a mass between 0.08 and 8 Suns has completely run out of hydrogen in its core it blasts off its outer layers and its core contracts to a white dwarf."
		+ " A stellar remnant with the size of the Earth. This dense, hot white dwarf emits intense radiation, illuminating the gas that once formed the star’s outer layers which is slowly expanding from the star."
		+ " We call these expanding gas clouds planetary nebulae.<br>"
		+ " Gradually, the white dwarf cools until it matches the background temperature of the Universe — this process takes hundreds of billions of years. 95% of all stars in the Universe are expected to die as white dwarfs.</div><br>";
// 	Neutron star with supernova remnant
	var temp_EN_neutron = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Stars between 8 and 25 times the mass of the Sun are hot enough to fuse elements up to iron in their cores."
		+ " Once they run out of fuel, these stars can no longer hold themselves up against their enormous gravity. Suddenly, gravity wins, and the star collapses in on itself, blowing out its outer material in a massive supernova explosion."
		+ " The intense gravity of the collapsing star crushes protons and electrons together to form neutrons, leaving behind the smallest and densest stars ever observed: neutron stars."
		+ " Neutron stars are about the size of a city, but contain the mass of up to three Suns.</div><br><br>";			
// 	Black hole with supernova remnant
	var temp_EN_hole = "<div align=\"left\" style=\"line-height: 100%;\"><font size=\"4\">Stars with at least 25 times the mass of our Sun are hot enough to fuse elements up to iron in their cores."
		+ " Once they run out of fuel, these stars can no longer hold themselves up against their enormous gravity. Suddenly, gravity wins, and the star collapses in on itself, blowing out its outer material in a massive supernova explosion."
		+ " The remaining, massive core collapses. It becomes so dense and its surface gravity so strong, that even light cannot escape its grasp: the star has become a black hole.</div><br><br><br>";
	var death_blue = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of more than 25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Black hole with supernova remnant</font></div><br>"
		+ temp_EN_hole
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_default+"\"></div>";
	var death_white = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 8-25 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">Neutron star with supernova remnant</font></div><br>"
		+ temp_EN_neutron
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_default+"\"></div>";
	var death_yellow = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.4-8 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">White dwarf with planetary nebula</font></div><br>"
		+ temp_EN_nebula
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_WhiteDwarf+"\"></div>";
	var death_orange = "<br><span><font size=\"5\">Life Cycle of a</font><br><font color=\"#00aaff\" size=\"5\">Main Sequence Star<br>with a mass of 0.08-0.4 solar masses</font></span>"
		+ "<br><br><div align=\"center\"><font color=\"#00aaff\" size=\"6\">White dwarf</font></div><br>"
		+ temp_EN_nebula
		+ "<div align=\"center\"><image width="+dialog_HR_image_width+" src=\""+image_HRdiagram_WhiteDwarf+"\"></div>";
	}  
}