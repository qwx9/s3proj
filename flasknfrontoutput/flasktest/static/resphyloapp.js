var treeNewickString = "(((EELA:0.150276,CONGERA:0.213019):0.230956,(EELB:0.263487,CONGERB:0.202633):0.246917):0.094785,((CAVEFISH:0.451027,(GOLDFISH:0.340495,ZEBRAFISH:0.390163):0.220565):0.067778,((((((NSAM:0.008113,NARG:0.014065):0.052991,SPUN:0.061003,(SMIC:0.027806,SDIA:0.015298,SXAN:0.046873):0.046977):0.009822,(NAUR:0.081298,(SSPI:0.023876,STIE:0.013652):0.058179):0.091775):0.073346,(MVIO:0.012271,MBER:0.039798):0.178835):0.147992,((BFNKILLIFISH:0.317455,(ONIL:0.029217,XCAU:0.084388):0.201166):0.055908,THORNYHEAD:0.252481):0.061905):0.157214,LAMPFISH:0.717196,((SCABBARDA:0.189684,SCABBARDB:0.362015):0.282263,((VIPERFISH:0.318217,BLACKDRAGON:0.109912):0.123642,LOOSEJAW:0.397100):0.287152):0.140663):0.206729):0.222485,(COELACANTH:0.558103,((CLAWEDFROG:0.441842,SALAMANDER:0.299607):0.135307,((CHAMELEON:0.771665,((PIGEON:0.150909,CHICKEN:0.172733):0.082163,ZEBRAFINCH:0.099172):0.272338):0.014055,((BOVINE:0.167569,DOLPHIN:0.157450):0.104783,ELEPHANT:0.166557):0.367205):0.050892):0.114731):0.295021)"
//var paramsString = "Log likelihood = -2636.08076729692402295768\nresult=phylo1\nphylo1=Single(process=1,data=1)\nmodel1=HKY85(kappa=7.335317023935,theta=0.549069149392,theta1=0.519914511076,theta2=0.479422925834)\nrate_distribution1=Constant()\nprocess1=Homogeneous(model=1, tree=1, rate=1)";
//var treeNewickString= "(MYG_HETPO:0.368112,(MYG_MUSAN:0.0235131,(MYG_GALJA:0.028772,MYG_GALGA:0.0446348):0.0701507):0.565124,(((MYG_CYPCA:0.166088,MYG_BRARE:0.147347):0.170912,((((MYG_THUTO:1e-06,(MYG_THUTH:1e-06,MYG_THUOB:1e-06):1e-06):1e-06,MYG_THUAL:0.0155883):0.0590001,MYG_AUXRO:0.124742):0.0432079,((MYG_NOTCO:0.00795952,((MYG_PSEGE:0.0238898,MYG_GOBGI:0.00783069):1e-06,(MYG_CRYAN:0.0237387,MYG_CHIRA:0.00780125):0.0234863):0.00782757):0.159703,MYG_TETNG:0.145346):0.0525612):0.0706916):0.728452,((((MYG_ANAPO:0.0023768,MYG_APTFO:0.203411):0.00907167,(((MYG_URILO:0.0234386,(MYG_CERMN:1e-06,MYG_AETPY:0.00753942):0.0231402):0.0186045,MYG_CHICK:0.0360976):0.00696645,MYG_PHAFI:0.0341205):0.00939063):0.122679,((((((MYG_ORYAF:0.0508005,(MYG_LOXAF:0.0157851,MYG_ELEMA:0.00911917):0.145389):0.0290513,(MYG_ROUAE:0.0172908,MYG_ERIEU:0.0569231):0.0158224):1e-06,((((((((MYG_MOUSE:0.126808,MYG_SPAEH:0.0220776):0.0180387,(MYG_OCHPR:1e-06,MYG_OCHCU:0.0158607):0.0398185):0.0165479,((((MYG_PERPO:0.0152719,MYG_NYCCO:0.00780723):0.0237072,MYG_GALCR:0.0554831):0.0248851,MYG_LEPMU:0.0959974):0.0308533,MYG_TUPGL:0.022439):0.00934668):0.00785011,((MYG_ONDZI:0.0570623,MYG_CASFI:0.0455326):0.0308741,MYG_RABIT:0.0593481):0.00771423):0.00803998,((MYG_LUTLU:0.017364,(((MYG_HALGR:1e-06,MYG_PHOVI:1e-06):1e-06,MYG_PHOSI:0.0233329):0.0823422,MYG_ZALCA:0.0576416):0.0249673):0.00758089,((MYG_VULCH:1e-06,(MYG_LYCPI:0.00760903,(MYG_OTOME:1e-06,MYG_CANFA:1e-06):1e-06):0.0076862):0.0859834,MYG_MELME:0.0425053):0.0077075):0.0168348):1e-06,(MYG_CTEGU:0.0415106,(MYG_PROGU:0.0240244,MYG_LAGMA:0.0163757):0.0247815):0.032984):0.00773612,MYG_PIG:0.0183319):1e-06,((((MYG_SHEEP:0.00752516,MYG_CEREL:1e-06):0.00693228,MYG_BOVIN:0.0157566):0.0925917,(MYG_HORSE:1e-06,MYG_EQUBU:1e-06):0.0398891):0.0145099,(((MYG_PHYCA:1e-06,MYG_KOGSI:0.0391467):0.0608967,(MYG_ESCGI:1e-06,(MYG_MEGNO:1e-06,(MYG_BALPH:0.0150661,MYG_BALAC:0.00738736):0.0075311):0.00752494):0.0283768):0.0262606,(((MYG_DELLE:1e-06,(((MYG_TURTR:1e-06,MYG_DELDE:1e-06):1e-06,(MYG_ORCOR:1e-06,MYG_GLOME:0.00769434):0.00769235):0.0235335,(MYG_PHOPH:1e-06,MYG_PHODA:1e-06):0.00785694):0.00790256):0.00981763,(MYG_ZIPCA:0.00745793,MYG_MESCA:0.00784889):0.09064):0.0162255,MYG_INIGE:0.0142612):0.0162626):0.0363361):0.0406261):0.0222316):0.011341,((((((MYG_PANTR:0.00785653,MYG_GORBE:0.00782737):1e-06,MYG_HUMAN:1e-06):0.00783747,(MYG_HYLSY:1e-06,MYG_HYLAG:1e-06):1e-06):0.00775794,MYG_PONPY:1e-06):0.0235205,((MYG_PREEN:1e-06,(MYG_PAPAN:1e-06,MYG_ERYPA:1e-06):1e-06):1e-06,MYG_MACFA:0.00777878):0.00780286):0.0175931,((MYG_CALJA:1e-06,MYG_AOTTR:0.00790939):1e-06,(MYG_LAGLA:0.024006,(MYG_SAISC:0.0239131,MYG_CEBAP:1e-06):0.00799106):0.0079443):0.0655049):0.0127496):0.0398334,(MYG_TACAC:0.0450866,MYG_ORNAN:0.0322989):0.101919):0.00887432,(MYG_MACRU:0.10986,MYG_DIDMA:0.0407133):0.00905655):0.237838):0.0389833,(MYG_ALLMI:0.227833,(MYG_VARVA:0.182275,(MYG_GRAGE:0.0214508,(MYG_CHEMY:0.0149263,MYG_CARCR:1e-06):0.0401065):0.127021):0.0462811):0.0238862):0.533865):0.512064)";


// ALL VARIABLES  COME FROM FLASK :
//https://stackoverflow.com/questions/42499535/passing-a-json-object-from-flask-to-javascript

function loadparamsout(){
    var dataobj = JSON.parse('{{ data | tojson | safe}}');
    var paramsout = JSON.stringify(dataobj.paramsout);
    return paramsout;
}

  //check output2json.py to know attribute

// ===== show in textarea the output parameters:
function paramsResults(){
    paramsString = loadparamsout();
    var display = document.createElement("TEXTAREA"); // https://www.w3schools.com/js/js_htmldom_nodes.asp
    display.setAttribute("id","pulledparameters");
    display.style.height = "200px";
    display.style.width = "280px";
    var t = document.createTextNode(paramsString); 
    display.appendChild(t);
    document.body.appendChild(display);

    var papa = document.getElementById("childElement");
    var parentDiv = papa.parentNode;
    parentDiv.insertBefore(display, papa); //insertAfter does not exist
}
function reloadparams(){
    document
        .getElementById("pulledparameters")
        .value = paramsString ;
}
function reuseparameters(){
    //better take paramsString and not textarea element
    // as user can damage text unintentionnally !
    alert ("soon available");
    tired();
}

function tired(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor="orange" ;
}

// == TREE STUFF
var height = 1000;
var width = 800;

d3.text(treeNewickString, function(error, newick){
    var tree = d3.layout.phylotree()
        .svg(d3.select("#tree_display"))
        .options({ 
            'left-right-spacing': 'fit-to-size',
            'top-bottom-spacing': 'fit-to-size',
            'selectable': true,
            'zoom':true,
            'right-offset':1, //this fixes the prlm right side, 
                    // but only works in d3version5 and npm
            'left-offset':0,
            'collapsible':false
        }).size([height,width])
        .node_circle_size(2);
    tree(treeNewickString)
        .layout();

    $("#layout").on("click", function(e) {
        tree.radial($(this).prop("checked")).placenodes().update();
        });
    });

