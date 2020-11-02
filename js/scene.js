var blochSphere = null;

let ground = null;
const groundPositionVertical = -1.8;

var quantumPhaseDisk = null;
var quantumPhaseLine = null;

var vectorPasted = false; // Indicates that vector was pasted for display

var quantumStateDiracGrid = new BABYLON.GUI.Grid();

var quantumStateGrid = new BABYLON.GUI.Grid();
var probAmplitudeTextBlock0 = new BABYLON.GUI.TextBlock();
var probAmplitudeTextBlock1 = new BABYLON.GUI.TextBlock();
var probabilityTextBlock0 = new BABYLON.GUI.TextBlock();
var probabilityTextBlock1 = new BABYLON.GUI.TextBlock();
var azimuthRadiansTextBlock = new BABYLON.GUI.TextBlock();

var outcomeProbabilityBar = new BABYLON.GUI.Slider();

function adaptRatio(value) {
    var devicePixelRatio = window.devicePixelRatio || 1.0;
    return devicePixelRatio * value;
}

function adaptRatioStr(value) {
    return adaptRatio(value) + "px";
}

function createScene(engine, canvas, config) {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    var rxm,rxp, rym, ryp, rzm, rzp = null;

    blochSphere = new BlochSphere("blochSphere", scene, 0, 0);

    BABYLON.SceneOptimizer.OptimizeAsync(scene);

    // scene.clearColor = new BABYLON.Color3( .75, .75, .75);
    scene.clearColor = new BABYLON.Color3(1.0, 1.0, 1.0);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 2.5, Math.PI / 2.5, 6, new BABYLON.Vector3(0, 0, 0), scene);
    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 5;
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(3, 7, -3), scene);

    quantumPhaseDisk = new QuantumPhaseDisk("quantumPhaseDisk", scene, blochSphere, groundPositionVertical);

    // Buttons, panels
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    /////// Outcome probability panel, bar, and labels
    var outcomeProbabilityPanel = new BABYLON.GUI.StackPanel();
    outcomeProbabilityPanel.height = adaptRatioStr(410); // org 410

    const outcomeProbabilityHeadingTextBlock = new BABYLON.GUI.TextBlock();
    outcomeProbabilityHeadingTextBlock.text = "Prob of |0⟩";
    outcomeProbabilityHeadingTextBlock.color = "black";
    outcomeProbabilityHeadingTextBlock.fontSize = "25px"; // org : "25px"
    outcomeProbabilityHeadingTextBlock.height = adaptRatioStr(30);
    outcomeProbabilityPanel.addControl(outcomeProbabilityHeadingTextBlock);

    const outcomeProbabilityTextBlock1 = new BABYLON.GUI.TextBlock();
    outcomeProbabilityTextBlock1.text = "1";
    outcomeProbabilityTextBlock1.color = "black";
    outcomeProbabilityTextBlock1.fontSize = "25px";
    outcomeProbabilityTextBlock1.height = adaptRatioStr(30);
    outcomeProbabilityPanel.addControl(outcomeProbabilityTextBlock1);

    outcomeProbabilityBar.minimum = 0;
    outcomeProbabilityBar.maximum = 1;
    outcomeProbabilityBar.isThumbClamped = true;
    outcomeProbabilityBar.isVertical = true;
    outcomeProbabilityBar.displayThumb = false;
    outcomeProbabilityBar.width = adaptRatioStr(30);
    outcomeProbabilityBar.height = adaptRatioStr(290);
    outcomeProbabilityBar.background = "#CCCCCC";
    outcomeProbabilityBar.color = "#666666";
    outcomeProbabilityBar.value = 0;
    outcomeProbabilityPanel.addControl(outcomeProbabilityBar);

    const outcomeProbabilityTextBlock0 = new BABYLON.GUI.TextBlock();
    outcomeProbabilityTextBlock0.text = "0";
    outcomeProbabilityTextBlock0.color = "black";
    outcomeProbabilityTextBlock0.fontSize = "25px";
    outcomeProbabilityTextBlock0.height = adaptRatioStr(30);
    outcomeProbabilityPanel.addControl(outcomeProbabilityTextBlock0);

    advancedTexture.addControl(outcomeProbabilityPanel);
    outcomeProbabilityPanel.linkWithMesh(blochSphere);
    outcomeProbabilityPanel.linkOffsetX = adaptRatioStr(-390);
    /////// END Outcome probability panel, bar, and labels


    /////// Gates panel
    var leftPanel = new BABYLON.GUI.StackPanel();
    leftPanel.width = adaptRatioStr(280);
    leftPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    leftPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(leftPanel);

    var rightPanel = new BABYLON.GUI.StackPanel();
    rightPanel.width = adaptRatioStr(110);
    rightPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    rightPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(rightPanel);

    // TODO: Move these into styles
    var buttonSize = adaptRatioStr(40); //org 65
    var paddingTop = adaptRatioStr(5); //org 5

    function CreateImageButton(img, buttonSize, paddingTop, observable ){
        var Btn = BABYLON.GUI.Button.CreateImageOnlyButton("but", img);
        Btn.paddingTop = paddingTop;
        Btn.width = buttonSize;
        Btn.height = buttonSize;
        Btn.onPointerDownObservable.add(observable);
        return Btn;
    }

    var addRadio = function(text, selected, parent, observable) {
        var button = new BABYLON.GUI.RadioButton();
        button.width = "25px"; //button sizes
        button.height = "25px";
        button.color = "#777";
        button.background = "white";     
        button.onIsCheckedChangedObservable.add((state)=>{
            if (state) {
                observable();
            }
        }); 
        button.isChecked=selected;

        var header = BABYLON.GUI.Control.AddHeader(button, text, "80px", { isHorizontal: true, controlFirst: true });
        header.height = "100px";
        header.color = "#777";
        parent.addControl(header); 
    }

    var zeroStateBtn = CreateImageButton("textures/zero-state.png", buttonSize, paddingTop, () => {
        blochSphere.setProbAmplitudes(math.complex(1, 0), math.complex(0, 0));
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(zeroStateBtn);

    var xGateBtn = CreateImageButton("textures/x-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.X);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(xGateBtn);
    
    var yGateBtn = CreateImageButton("textures/y-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.Y);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(yGateBtn);

    var zGateBtn = CreateImageButton("textures/z-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.Z);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(zGateBtn);

    var hGateBtn = CreateImageButton("textures/h-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.H);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(hGateBtn);

    addRadio("θ=π/8", true, leftPanel, () => {
        rxp = Gate.RxPi8;
        ryp = Gate.RyPi8;
        rzp = Gate.RzPi8;
        rxm = Gate.RxmPi8;
        rym = Gate.RymPi8;
        rzm = Gate.RzmPi8;
    });

    var rxPi12GateBtn = CreateImageButton("textures/rx+gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(rxp);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(rxPi12GateBtn);

    var ryPi12GateBtn = CreateImageButton("textures/ry+gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(ryp);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(ryPi12GateBtn);

    var rzPi12GateBtn = CreateImageButton("textures/rz+gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(rzp);
        updateQuantumStateDisplay(config);
    });
    leftPanel.addControl(rzPi12GateBtn);

    var oneStateBtn = CreateImageButton("textures/one-state.png", buttonSize, paddingTop, () => {
        blochSphere.setProbAmplitudes(math.complex(0, 0), math.complex(1, 0));
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(oneStateBtn);

    var sGateBtn = CreateImageButton("textures/s-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.S);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(sGateBtn);

    var sDagGateBtn = CreateImageButton("textures/s-dag-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.St);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(sDagGateBtn);

    var tGateBtn = CreateImageButton("textures/t-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.T);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(tGateBtn);

    var tDagGateBtn = CreateImageButton("textures/t-dag-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(Gate.Tt);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(tDagGateBtn);

    addRadio("θ=π/12", false, rightPanel,  () => {
        rxp = Gate.RxPi12;
        ryp = Gate.RyPi12;
        rzp = Gate.RzPi12;
        rxm = Gate.RxmPi12;
        rym = Gate.RymPi12;
        rzm = Gate.RzmPi12;
    });

    var rxmPi12GateBtn = CreateImageButton("textures/rx-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(rxm);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(rxmPi12GateBtn);

    var rymPi12GateBtn = CreateImageButton("textures/ry-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(rym);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(rymPi12GateBtn);

    var rzmPi12GateBtn = CreateImageButton("textures/rz-gate.png", buttonSize, paddingTop, () => {
        blochSphere.applyGate(rzm);
        updateQuantumStateDisplay(config);
    });
    rightPanel.addControl(rzmPi12GateBtn);
   
    /////// END Gates panel


    /////// Top panel (State in Dirac notation)
    // \vert \psi \rangle = \sqrt{ 0.80} \vert 0 \rangle + (\sqrt{0.20}) e^{i 0.25\pi} \vert 1 \rangle
    // \vert \psi \rangle = \sqrt{ 0.80} \vert 0 \rangle + (\sqrt{0.20}) e^{i 0.25\pi} \vert 1 \rangle

    var qubitStateDiracImagePanel = new BABYLON.GUI.StackPanel();
    qubitStateDiracImagePanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    qubitStateDiracImagePanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    qubitStateDiracImagePanel.height = adaptRatioStr(546);
    qubitStateDiracImagePanel.paddingTop = adaptRatioStr(10);
    advancedTexture.addControl(qubitStateDiracImagePanel);

    var qubitStateDiracImage = new BABYLON.GUI.Image("but", "images/qubit-state-dirac.png");
    qubitStateDiracImage.width = adaptRatioStr(546);
    qubitStateDiracImage.height = adaptRatioStr(48);
    qubitStateDiracImagePanel.addControl(qubitStateDiracImage);

    var qubitStateDiracTextPanel = new BABYLON.GUI.StackPanel();
    qubitStateDiracTextPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    qubitStateDiracTextPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    qubitStateDiracTextPanel.height = adaptRatioStr(546);
    qubitStateDiracTextPanel.paddingTop = adaptRatioStr(10);
    advancedTexture.addControl(qubitStateDiracTextPanel);

    var qubitStateDiracTextBlock = new BABYLON.GUI.TextBlock();
    qubitStateDiracTextBlock.text = "Dirac notation will go here";
    qubitStateDiracTextBlock.color = "black";
    qubitStateDiracTextBlock.fontSize = "25px";
    /////// END Top panel


    /////// Bottom panel
    var UiPanel = new BABYLON.GUI.StackPanel();
    UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    // TODO: Make this info appear in a different form (e.g. a vector)
    //advancedTexture.addControl(UiPanel);

    // Grid labels
    var basisLabel0 = new BABYLON.GUI.TextBlock();
    basisLabel0.text = "|0⟩";
    basisLabel0.color = "black";
    basisLabel0.fontSize = "25px";

    var basisLabel1 = new BABYLON.GUI.TextBlock();
    basisLabel1.text = "|1⟩";
    basisLabel1.color = "black";
    basisLabel1.fontSize = "25px";


    //// Dirac notation grid
    quantumStateDiracGrid.width = adaptRatioStr(546); //org 546
    quantumStateDiracGrid.height = adaptRatioStr(40); //org 40

    quantumStateDiracGrid.addRowDefinition(adaptRatio(0.4));
    quantumStateDiracGrid.addRowDefinition(adaptRatio(0.6));
    quantumStateDiracGrid.addColumnDefinition(adaptRatio(118), true);
    quantumStateDiracGrid.addColumnDefinition(adaptRatio(79), true);
    quantumStateDiracGrid.addColumnDefinition(adaptRatio(125), true);
    quantumStateDiracGrid.addColumnDefinition(adaptRatio(66), true);
    quantumStateDiracGrid.addColumnDefinition(adaptRatio(46), true);
    quantumStateDiracGrid.addColumnDefinition(adaptRatio(50), true);

    qubitStateDiracTextPanel.addControl(quantumStateDiracGrid);
    //// END Dirac notation grid


    // Grid
 
    quantumStateGrid.width = adaptRatioStr(300);
    quantumStateGrid.height = adaptRatioStr(80);

    quantumStateGrid.addColumnDefinition(0.70);
    quantumStateGrid.addColumnDefinition(0.10);
    quantumStateGrid.addColumnDefinition(0.30);
    quantumStateGrid.addRowDefinition(0.50);
    quantumStateGrid.addRowDefinition(0.50);

    UiPanel.addControl(quantumStateGrid);
    /////// END Bottom panel


    /////// User may paste one or more state vectors for display on the Bloch sphere
    const strToComplexNum = function(complexStr) {
        // Delineation between real and imaginary parts is first sign (+/-) that isn't at the start of the string
        let minusSignPosition = complexStr.indexOf('-', 1);
        if (complexStr.charAt(minusSignPosition - 1) === 'e') {
            minusSignPosition = complexStr.indexOf('-', minusSignPosition + 1);
        }
        let plusSignPosition = complexStr.indexOf('+', 1);
        if (complexStr.charAt(plusSignPosition - 1) === 'e') {
            plusSignPosition = complexStr.indexOf('+', plusSignPosition + 1);
        }
        let imaginaryPositive = true;
        if (minusSignPosition > 0) {
            if (plusSignPosition < 0 || minusSignPosition < plusSignPosition) {
                imaginaryPositive = false;
            }
        }

        let realPartStr = "";
        let imagPartStr = "";

        if (imaginaryPositive) {
            // There should be a plus sign in the string
            realPartStr = complexStr.substring(0, plusSignPosition);
            imagPartStr = complexStr.substring(plusSignPosition);
        } else {
            // There should be a minus sign in the string
            realPartStr = complexStr.substring(0, minusSignPosition);
            imagPartStr = complexStr.substring(minusSignPosition);
        }
        if (imagPartStr.endsWith('j')) {
            imagPartStr = imagPartStr.substring(0, imagPartStr.indexOf('j'));
        } else if (imagPartStr.endsWith('i')) {
            imagPartStr = imagPartStr.substring(0, imagPartStr.indexOf('i'));
        }
        return math.complex(Number(realPartStr), Number(imagPartStr));
    };

    const statevectorInputText = new BABYLON.GUI.InputText();
    statevectorInputText.width = 0.25;
    statevectorInputText.maxWidth = 0.25;
    statevectorInputText.height = adaptRatioStr(40);
    statevectorInputText.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    statevectorInputText.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    statevectorInputText.text = "";
    statevectorInputText.color = "white";
    statevectorInputText.background = "gray";
    statevectorInputText.paddingBottom = adaptRatioStr(8);
    statevectorInputText.paddingLeft = adaptRatioStr(8);

    statevectorInputText.onTextPasteObservable.add(function() {
        let txt = statevectorInputText.text;
        statevectorInputText.text = "** Pasted **";
        setTimeout(() => {
            statevectorInputText.text = ""
        }, 1500);

        let tempStateStrArray = [];
        let pos = 0;

        // Remove everything up to and including the final '[' (but there should only be one)
        pos = txt.lastIndexOf('[');
        if (pos >= 0 && txt.length > pos + 1) {
            txt = txt.substring(pos + 1);
        }

        // Remove everything including and after the first ']' (but there should only be one)
        pos = txt.indexOf(']');
        if (pos >= 0) {
            txt = txt.substring(0, pos);
        }

        // Remove all spaces
        txt = txt.replace(/\s/g, '');

        // Populate tempStateStrArray
        tempStateStrArray = txt.split(',');

        vectorPasted = true;

        blochSphere.setAllowMultipleStateLines(false);
        for (let idx = 0; idx < tempStateStrArray.length; idx++) {

            // Send each pair of complex numbers the bloch sphere,
            // suppressing the disposal of the previous one
            if (idx >= 3) {
                blochSphere.setAllowMultipleStateLines(true);
            } else {
                blochSphere.setAllowMultipleStateLines(false);
            }

            if (idx % 2 == 1) {
                blochSphere.setProbAmplitudes(
                    strToComplexNum(tempStateStrArray[idx - 1]),
                    strToComplexNum(tempStateStrArray[idx])
                );
                updateQuantumStateDisplay(config);
            }
        }
        blochSphere.setAllowMultipleStateLines(false);

    });


    advancedTexture.addControl(statevectorInputText);


    /////// Control panel
    // Define selection panel and groups
    var inclination = function(radians) {
        blochSphere.setInclinationRadians(radians);
        blochSphere.resetGlobalPhase();
        blochSphere.updateQuantumStateLine();
        updateQuantumStateDisplay(config);
    }

    var azimuth = function(radians) {
        blochSphere.setAzimuthRadians(radians);
        blochSphere.resetGlobalPhase();
        blochSphere.updateQuantumStateLine();
        updateQuantumStateDisplay(config);
    }

    var displayValue = function(value) {
        //return BABYLON.Tools.ToDegrees(value) | 0;
        //return value.toFixed(2);
        return (value / Math.PI).toFixed(2);
    }

    var rotateGroup = new BABYLON.GUI.SliderGroup("Spherical coordinates:", "S");
    rotateGroup.addSlider("Polar angle", inclination, "π radians", 0, Math.PI, 0, displayValue)
    rotateGroup.addSlider("Azimuth angle", azimuth, "π radians", 0, Math.PI * 2, 0, displayValue)

    var selectBox = new BABYLON.GUI.SelectionPanel("sp", [rotateGroup]);
    selectBox.width = adaptRatio(0.35);
    selectBox.height = adaptRatio(0.25);
    selectBox.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    selectBox.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

    // TODO: Uncomment next line if sliders desired
    // advancedTexture.addControl(selectBox);
    /////// END Control panel


    scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERDOWN:
                // TODO: Find out how to identify that sphere was picked
                if (pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh == blochSphere.sphere) {
                    //if(pointerInfo.pickInfo.hit) {
                    console.log("pickedPoint: " + pointerInfo.pickInfo.pickedPoint);

                    blochSphere.setCartesianCoords(pointerInfo.pickInfo.pickedPoint);
                    //blochSphere.updateQuantumStateLine();
                    updateQuantumStateDisplay(config);
                }
                break;
        }
    });

    //blochSphere.updateQuantumStateLine();
    updateQuantumStateDisplay(config);

    // return the created scene
    return scene;
};

function azimuthRadiansToPiRadians(radians) {
    var piRadians = (radians / Math.PI).toFixed(2)
    var piRadiansStr = piRadians + "π";

    if (piRadiansStr === "0.00π" || piRadiansStr === "2.00π") {
        piRadiansStr = "0      ";
    } else if (piRadiansStr === "0.13π") {
        piRadiansStr = "π/8    ";
    } else if (piRadiansStr === "0.17π") {
        piRadiansStr = "π/6    ";
    } else if (piRadiansStr === "0.25π") {
        piRadiansStr = "π/4    ";
    } else if (piRadiansStr === "0.33π") {
        piRadiansStr = "π/3    ";
    } else if (piRadiansStr === "0.50π") {
        piRadiansStr = "π/2    ";
    } else if (piRadiansStr === "0.67π") {
        piRadiansStr = "2π/3 ";
    } else if (piRadiansStr === "0.75π") {
        piRadiansStr = "3π/4 ";
    } else if (piRadiansStr === "0.83π") {
        piRadiansStr = "5π/6 ";
    } else if (piRadiansStr === "0.88π") {
        piRadiansStr = "7π/8 ";
    } else if (piRadiansStr === "1.00π") {
        piRadiansStr = "π      ";
    } else if (piRadiansStr === "1.13π") {
        piRadiansStr = "9π/8 ";
    } else if (piRadiansStr === "1.17π") {
        piRadiansStr = "7π/6 ";
    } else if (piRadiansStr === "1.25π") {
        piRadiansStr = "5π/4 ";
    } else if (piRadiansStr === "1.33π") {
        piRadiansStr = "4π/3 ";
    } else if (piRadiansStr === "1.50π") {
        piRadiansStr = "3π/2 ";
    } else if (piRadiansStr === "1.67π") {
        piRadiansStr = "5π/3 ";
    } else if (piRadiansStr === "1.75π") {
        piRadiansStr = "7π/4 ";
    } else if (piRadiansStr === "1.83π") {
        piRadiansStr = "11π/6";
    } else if (piRadiansStr === "1.88π") {
        piRadiansStr = "15π/8";
    }
    return piRadiansStr;
}

function updateQuantumStateDisplay(config) {

    blochSphere.resetGlobalPhase();
    probAmplitudeTextBlock0.dispose();

    var imaginary0 = blochSphere.getProbAmplitude0().im;
    var imaginary1 = blochSphere.getProbAmplitude1().im;

    // Update outcome probability bar
    outcomeProbabilityBar.value = blochSphere.getProbability0();

    probAmplitudeTextBlock0.text = blochSphere.getProbAmplitude0().re.toFixed(2); // +
    // (imaginary0 < 0 ? " - " : " + ") +
    // Math.abs(imaginary0).toFixed(2) + "i";
    probAmplitudeTextBlock0.color = "black";
    probAmplitudeTextBlock0.fontSize = "15px"; //org off

    probAmplitudeTextBlock1.dispose();
    probAmplitudeTextBlock1.text = blochSphere.getProbAmplitude1().re.toFixed(2) +
        (imaginary1 < 0 ? " - " : " + ") +
        Math.abs(imaginary1).toFixed(2) + "i";
    probAmplitudeTextBlock1.color = "black";
    probAmplitudeTextBlock1.fontSize = "15px"; //org off

    probabilityTextBlock0.dispose();
    probabilityTextBlock0.text = blochSphere.getProbability0().toFixed(2);
    probabilityTextBlock0.color = "black";
    probabilityTextBlock0.fontSize = "15px"; //org off

    probabilityTextBlock1.dispose();
    probabilityTextBlock1.text = blochSphere.getProbability1().toFixed(2);
    probabilityTextBlock1.color = "black";
    probabilityTextBlock1.fontSize = "15px"; //org off

    azimuthRadiansTextBlock.dispose();
    azimuthRadiansTextBlock.text = azimuthRadiansToPiRadians(blochSphere.getAzimuthRadians());
    azimuthRadiansTextBlock.color = "black";
    //azimuthRadiansTextBlock.fontSize = "25px" * 0.7; //org off
    azimuthRadiansTextBlock.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;

    if((function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,'http://detectmobilebrowser.com/mobile')){
        probAmplitudeTextBlock0.fontSize = "5px";
        probAmplitudeTextBlock1.fontSize = "5px";
        probabilityTextBlock0.fontSize = "5px";
        probabilityTextBlock1.fontSize = "5px";
        azimuthRadiansTextBlock.fontSize = "5px" * 0.7;
        console.log(check)
        console.log("probabilityTextBlock1.fontSize: "+ probabilityTextBlock1.fontSize)
        }else{
            probAmplitudeTextBlock0.fontSize = "25px";
            probAmplitudeTextBlock1.fontSize = "25px";
            probabilityTextBlock0.fontSize = "25px";
            probabilityTextBlock1.fontSize = "25px";
            azimuthRadiansTextBlock.fontSize = "25px" * 0.7;
        }

    quantumStateGrid.addControl(probAmplitudeTextBlock0, 0, 0);
    quantumStateGrid.addControl(probAmplitudeTextBlock1, 1, 0);

    ////// Update Dirac notation
    quantumStateDiracGrid.addControl(probabilityTextBlock0, 1, 1)
    quantumStateDiracGrid.addControl(probabilityTextBlock1, 1, 3)
    quantumStateDiracGrid.addControl(azimuthRadiansTextBlock, 0, 5)
     ////// END Update Dirac notation

    quantumPhaseDisk.updateQuantumPhaseArrow();
}
