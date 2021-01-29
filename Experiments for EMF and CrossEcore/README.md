To execute the experiments, you first have to load the "Eclipse EMF" folder into Eclipse.
Then you have to install dependencies for the "CrossEcore" folder (e.g. by using "npm install").
Then you execute the "webpack_build" command in the CrossEcore folder to build the project and open the file "output/index.html" in your browser.
Afterwards, you take the Ecore model instances "generated_train_benchmark.xmi" from the "ecore-typescript/Experiments for EMF and CrossEcore/Eclipse EMF/hu.bme.mit.trainbenchmark.ttc.emf.instance/instances" folder
(you need to select the seed and size) and upload them in the "index.html" website. 
Afterwards, you open your browser's console to copy the Ecore model instance which has been deserialized and again serialized by CrossEcore+.
The time needed to deserialize and serialize the Ecore model instance is also being shown in the console.
Afterwards, you insert the copied Ecore model instance from CrossEcore+ in the file "crossecore_serialized_train_benchmark.xmi" of the folder
"ecore-typescript/Experiments for EMF and CrossEcore/Eclipse EMF/hu.bme.mit.trainbenchmark.ttc.emf.instance/instances" (with the same seed and size as the "generated_train_benchmark.xmi").
If you execute "ecore-typescript/Experiments for EMF and CrossEcore/Eclipse EMF/hu.bme.mit.trainbenchmark.ttc.emf.instance/src/hu/bme/mit/trainbenchmark/ttc/emf/instance/TrainMain.java" in Eclipse,
you will see that there are 0 differences between the original generated Ecore model instance and the one exchanged with CrossEcore+, which successfully concludes experiment 1.
If you again exchange the file "emf_serialized_train_benchmark.xmi" with CrossEcore+ and paste CrossEcore+'s resulting Ecore model instance in the file "crossecore_serialized_train_benchmark2.xmi",
then again execute "TrainMain.java", you will see that there are zero differences between all exchanged Ecore model instances, which successfully concludes experiment 2.

As for the time, you can outcomment the commented code in "TrainMain.java" to measure the time needed to serialize and deserialize an Ecore model instance.
For both EMF and CrossEcore+, the number of Objects, References and Containment Relationships (summarized as References) is also given for each Ecore model instance.
That is how you execute experiment 3.

To generate more Ecore model instances of different sizes, you need to adapt the Train Benchmark (https://github.com/FTSRG/trainbenchmark-ttc) in a way that no errors are being injected,
UUIDs are being used instead of paths as references and that the type is always being given within containments (but not by using "xsi:type" but by using "xmi:type" instead).
This way, you can create your own Ecore model instances with other seeds and sizes (you will still see that this model-driven bridge works for both EMF and CrossEcore+ regardless).