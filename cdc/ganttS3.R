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
Période de cours (Lun-Mar-Mer)				:done,	d0, 20200928, 20201208
Examens 						: d0b, 20201201, 20201215
ExamStats						:d0c, 20201124, 1d
Prototype 1						:crit,	d1, 20201116, 1d
Application version finale et soutenance		:crit,	d2, 20201217, 1d


section Prise en main de bppml
Installation en local de bppsuite			:done, pma1, 20200929, 5d
Tutoriel bppml, identification infos entrée-sortie 		:active, pma2, 20201005,3d
Familiarisation modèlisation en phylogénie		:active, pma3, 20200925,3w

section Conception et pré-requis
Définition de l'architecture de l'application		:done, cp1, 20201002, 1d
Appropriation de Flask     			:active, cp2, 20201006, 5d
Prise en main CSS, Typescript    		: cp3, 20201007, 10d


section Application Web en local
Dévélopement interface entrée .js	:	deweb1, 20201013, 5w
Scripting variables depuis Flask vers bppml 		:	deweb2, 20201013, 5w
Transfer résultats bppml vers interface sortie	:	deweb4, 20201013, 5w
Corrections					:	deweb5, 20201105, 2w
Implémentation et intégration				:	deweb6, 20201111, 2w


section Application Web Serveur
Documentation						:	prep1, 20201112, 5d
Déploiement en Serveur					:crit, prep2, 20201115, 1w
Finalisation et tests					:	prep3, after prep2, 5d

section Validation
Prise en main 						:app0, after prep2, 5d
Corrections éventuelles				:	app1, after app0, 2d

section Objectifs secondaires et optionnels
Optimisations de l'application			:	sec1, after app0, 20201202

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
