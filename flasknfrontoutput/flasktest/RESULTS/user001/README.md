# these are just results from "Myo" Exemple ML test:
======================================

1.  went to example `ML.bpp` file location :
```
$ cd .local/bppsuite/Examples/MaximumLikelihood/Proteins/Homogeneous
```
there I copied `ML.bpp` into `copyML.bpp` and changed output filenames inside text adding "Xcopy" to original names.

2. launched maxlikelihood :
```
$ ~/.local/include/Bpp/bin/bppml param=copyML.bpp
```
3. results available at `~/.local/bppsuite/Examples/MaximumLikelihood/Proteins/Homogeneous`, I copied into this repo.
