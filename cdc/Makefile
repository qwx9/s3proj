OUT=ProjetS3.CahierDesCharges.Bonnet.Guichard.LascrouxDeisy

.PHONY: default
default: $(OUT).pdf

# have to build twice for table of contents
$(OUT).pdf: *.tex
	pdflatex -jobname=$(OUT) main.tex
	biber $(OUT)
	pdflatex -jobname=$(OUT) main.tex
	pdflatex -jobname=$(OUT) main.tex

$(OUT).docx: *.tex
	pandoc main.tex -o $@

clean:
	rm -f $(OUT).*
