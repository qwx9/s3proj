#!/usr/bin/env Rscript
# https://stackoverflow.com/questions/3550341/gantt-charts-with-r
# this saves our Gentt stuff into good folder

fileout1 = "fig/mermaid1.pdf"
fileout2 = "fig/mermaid2.pdf"
library(DiagrammeR)
x <- mermaid("
gantt
dateFormat YYYYMMDD
title Projet S3 Bio Informatique

section Organisation du master
période de cours (Lun-Mar-Mer)				:done,	d0, 20200928, 20201208
examens 						: d0b, 20201201, 20201215
examStats						:d0c, 20201124, 1d
prototype 1						:crit,	d1, 20201116, 1d
application version finale et soutenance		:crit,	d2, 20201217, 1d


section Prise en main bppSuite
Installation en locale, tests bppml				:done, pma1, 20200929, 5d
Tutoriel, identification infos entrée-sortie 		:active, pma2, 20201005,3d
familiarisation modèlisation en phylogénie		:active, pma3, 20200925,3w

section Conception et pre-réquis
définition de l architecture de l application		:done, cp1, 20201002, 1d
appropriation de Flask et npm    			:active, cp2, 20201006, 5d
prise en main de typescript    			: cp3, 20201007, 10d


section Application Web en locale
dévélopement interface input client .ts et Flask	:	deweb1, 20201013, 5w
scripting variables depuis .js à .py et bppml 		:	deweb2, 20201013, 5w
scripting résultats bppml vers interface client	:	deweb4, 20201013, 5w
corrections					:	deweb5, 20201105, 2w
implémentation et intégration				:	deweb6, 20201111, 2w


section Application Web Serveur
documentation						:	prep1, 20201112, 5d
Déploiement en Serveur					:crit, prep2, 20201115, 1w
finalisation et tests					:	prep3, after prep2, 5d

section Validation
prise en main 						:app0, after prep2, 5d
corrections éventuelles				:	app1, after app0, 2d

section Objectifs secondaires et optionnels
optimisations de l application			:	sec1, after app0, 20201202

", width=1280, height=1024)
#print(x)
library(webshot)
# webshot::install_phantomjs()
plotly::export(x, file = fileout1) #this function is deprecated but it works fine !
if ( file.exists(fileout1) ){
	print(paste("despite deprecated warning, pdf image saved succesfully into", fileout1))
}else{
	print("trying another method") #autre option
	o <- tryCatch({library(DiagrammeRsvg)
		library(magrittr)
		library(rsvg)
		x %>% htmltools::html_print() %>% webshot::webshot(file=fileout2)
		}, error=function(err){
		print(paste("bad trick....",err))}
		)
}  # I tested both methods, they  change font style to less nice!!!!!!
#end
