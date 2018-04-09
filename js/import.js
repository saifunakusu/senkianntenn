(function(){
	function importJS() {
	if (! new Array().push) return false;
	    var scripts = new Array(
					// '//code.createjs.com/preloadjs-0.6.2.min.js',
	        'js/lib/jquery-3.2.1.min.js',
	        'js/loader.js',
	        'js/lib/audio/soundjs-NEXT.min.js',
					'js/lib/audio/flashaudioplugin-0.6.1.min.js',
	        'js/lib/bodymovin.js',
	        'js/lib/tween/TweenMax.min.js',
	        'js/lib/tween/TimelineMax.min.js',
	        'js/lib/three/three.min.js',
	        'js/lib/three/OrbitControls.js',
	        'js/lib/three/shader/WaterShader.js',
	        'js/lib/three/Detector.js',
	        'js/lib/three/CanvasRenderer.js',
	        'js/lib/three/Projector.js',
	        'js/lib/three/EffectComposer.js',
					'js/lib/three/shader/ShaderPass.js',
	        'js/lib/three/shader/RenderPass.js',
	        'js/lib/three/shader/CopyShader.js',
					'js/lib/three/shader/SepiaShader.js',
	        'js/lib/three/shader/DigitalGlitch.js',
	        'js/lib/three/shader/GlitchPass.js',
	        'js/lib/tween/TimelineMax.min.js',
	        'js/lib/three/DDSLoader.js',
	        'js/lib/three/OBJLoader.js',
	        'js/lib/three/MTLLoader.js',
	        'js/lib/three/compatibility.js',
	        'js/lib/three/MorphAnimMesh.js',
	        'js/lib/three/Projector.js',
	        'js/lib/three/GPUParticleSystem.js',
					'js/lib/clr/utils.js',
	        'js/lib/clr/clmtrackr.min.js',
	        'js/lib/clr/model_pca_20_svm.js',
	        'js/lib/clr/d3.min.js',
	        'js/lib/clr/emotion_classifier.js',
	        'js/lib/clr/emotionmodel.js',
	        'js/variable.js',
					'js/video.js',
	        'js/facetracking.js',
	        'js/main.js'
	    );
	    for (var i=0; i<scripts.length; i++) {
	        document.write('<script type="text/javascript" src="' +scripts[i] +'" charset="utf-8"></script>');
	    }
	}
	importJS();
})();
