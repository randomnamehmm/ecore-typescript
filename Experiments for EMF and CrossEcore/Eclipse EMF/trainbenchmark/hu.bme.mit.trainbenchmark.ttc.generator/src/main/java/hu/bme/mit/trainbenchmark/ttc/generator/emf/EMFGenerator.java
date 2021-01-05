/*******************************************************************************
 * Copyright (c) 2010-2014, Benedek Izso, Gabor Szarnyas, Istvan Rath and Daniel Varro
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Benedek Izso - initial API and implementation
 *   Gabor Szarnyas - initial API and implementation
 *******************************************************************************/

package hu.bme.mit.trainbenchmark.ttc.generator.emf;

import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.CURRENTPOSITION;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.POSITION;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SIGNAL;
import hu.bme.mit.trainbenchmark.ttc.config.GenericConfig;
import hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants;
import hu.bme.mit.trainbenchmark.ttc.emf.FileBroker;
import hu.bme.mit.trainbenchmark.ttc.generator.Generator;
import hu.bme.mit.trainbenchmark.ttc.railway.RailwayContainer;
import hu.bme.mit.trainbenchmark.ttc.railway.RailwayElement;
import hu.bme.mit.trainbenchmark.ttc.railway.RailwayFactory;
import hu.bme.mit.trainbenchmark.ttc.railway.RailwayPackage;
import hu.bme.mit.trainbenchmark.ttc.railway.Route;
import hu.bme.mit.trainbenchmark.ttc.railway.Semaphore;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.HashMap;

import org.apache.commons.cli.ParseException;
import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceImpl;
import org.eclipse.emf.ecore.xmi.XMIResource;

public class EMFGenerator extends Generator {

	public EMFGenerator(final String args[]) throws ParseException {
		super();
		generatorConfig = new GenericConfig(args);
	}

	protected Resource resource;
	protected RailwayFactory factory;
	protected RailwayContainer container;

	@Override
	public void initModel() {
		final String fileName = generatorConfig.getInstanceModelPath() + "/railway-" + generatorConfig.getSize() + ".xmi";
		final URI resourceURI = FileBroker.getEMFUri(fileName);

		final ResourceSet resourceSet = new ResourceSetImpl();

		// selbst hinzugefügt
		resourceSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
        	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl() {
        		  @Override
        		  public Resource createResource(URI uri) {
        		    return new XMIResourceImpl(uri) {
		    			@Override
		    			protected boolean useUUIDs() {
		    				return true;
		    			}
        		    };
        		  }
        	});
		
		resource = resourceSet.createResource(resourceURI);
		resource.getContents().clear();

		factory = RailwayFactory.eINSTANCE;
		container = factory.createRailwayContainer();
		resource.getContents().add(container);
	}

	@Override
	public void persistModel() throws IOException {
		Map options = new HashMap(); //
        options.put(XMIResource.OPTION_USE_XMI_TYPE, Boolean.TRUE); //
		options.put(XMIResource.OPTION_SAVE_TYPE_INFORMATION, Boolean.TRUE); //
		resource.save(options); // resource.save(null);
	}

	@Override
	protected Object createVertex(final int id, final String type, final Map<String, Object> attributes,
			final Map<String, Object> outgoingEdges, final Map<String, Object> incomingEdges) throws IOException {
		final EClass clazz = (EClass) RailwayPackage.eINSTANCE.getEClassifier(type);
		final RailwayElement railwayElement = (RailwayElement) RailwayFactory.eINSTANCE.create(clazz);
		railwayElement.setId(id);
		for (final Entry<String, Object> attribute : attributes.entrySet()) {
			setAttribute(clazz, railwayElement, attribute.getKey(), attribute.getValue());
		}

		switch (type) {
		case ModelConstants.SEMAPHORE:
			container.getSemaphores().add((Semaphore) railwayElement);
			break;
		case ModelConstants.ROUTE:
			container.getRoutes().add((Route) railwayElement);
			break;
		default:
			break;
		}
		
		for (final Entry<String, Object> outgoingEdge : outgoingEdges.entrySet()) {
			createEdge(outgoingEdge.getKey(), railwayElement, outgoingEdge.getValue());
		}

		for (final Entry<String, Object> incomingEdge : incomingEdges.entrySet()) {
			createEdge(incomingEdge.getKey(), incomingEdge.getValue(), railwayElement);
		}

		return railwayElement;
	}

	@Override
	protected void createEdge(final String label, final Object from, final Object to) throws IOException {
		if (from == null) {
			if (!container.getInvalids().contains(to)) {
				container.getInvalids().add((RailwayElement) to);
			}
			return;
		}

		if (to == null) {
			if (!container.getInvalids().contains(from)) {
				container.getInvalids().add((RailwayElement) from);
			}
			return;
		}

		final EObject objectFrom = (EObject) from;
		final EStructuralFeature edgeType = objectFrom.eClass().getEStructuralFeature(label);

		if (edgeType.isMany()) {
			final List<Object> l = (List<Object>) objectFrom.eGet(edgeType);
			l.add(to);
		} else {
			objectFrom.eSet(edgeType, to);
		}
	}

	@Override
	protected void setAttribute(final String type, final Object node, final String key, final Object value) throws IOException {
		final EClass clazz = (EClass) RailwayPackage.eINSTANCE.getEClassifier(type);
		setAttribute(clazz, (RailwayElement) node, key, value);
	}

	protected void setAttribute(final EClass clazz, final RailwayElement node, final String key, Object value) {
		// change the enum value from the
		// hu.bme.mit.trainbenchmark.ttc.constants.Signal enum to the
		// hu.bme.mit.trainbenchmark.ttc.railway.Signal enum
		if (SIGNAL.equals(key)) {
			final int ordinal = ((hu.bme.mit.trainbenchmark.ttc.constants.Signal) value).ordinal();
			value = hu.bme.mit.trainbenchmark.ttc.railway.Signal.get(ordinal);
		} else if (CURRENTPOSITION.equals(key) || POSITION.equals(key)) {
			final int ordinal = ((hu.bme.mit.trainbenchmark.ttc.constants.Position) value).ordinal();
			value = hu.bme.mit.trainbenchmark.ttc.railway.Position.get(ordinal);
		}

		final EStructuralFeature feature = clazz.getEStructuralFeature(key);
		node.eSet(feature, value);
	}

}
