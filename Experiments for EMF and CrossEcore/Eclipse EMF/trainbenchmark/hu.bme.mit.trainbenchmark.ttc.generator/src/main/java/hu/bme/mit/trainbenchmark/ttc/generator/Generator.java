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

package hu.bme.mit.trainbenchmark.ttc.generator;

import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.CONNECTSTO;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.CURRENTPOSITION;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.DEFINED_BY;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.ENTRY;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.EXIT;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.FOLLOWS;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.LENGTH;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.POSITION;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.ROUTE;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SEGMENT;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SEMAPHORE;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SENSOR;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SENSOR_EDGE;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SIGNAL;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SWITCH;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SWITCHPOSITION;
import static hu.bme.mit.trainbenchmark.ttc.constants.ModelConstants.SWITCH_EDGE;
import hu.bme.mit.trainbenchmark.ttc.config.GenericConfig;
import hu.bme.mit.trainbenchmark.ttc.constants.Position;
import hu.bme.mit.trainbenchmark.ttc.constants.Signal;
import hu.bme.mit.trainbenchmark.ttc.constants.TrainBenchmarkConstants;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

public abstract class Generator {

	// id
	protected int id = 0;

	// static configuration
	protected GenericConfig generatorConfig;

	// dynamic configuration
	protected int maxSegments;
	protected int maxRoutes;
	protected int maxSwitchPositions;
	protected int maxSensors;

	protected final int posLengthErrorPercent = -1; // 6;
	protected final int routeSensorErrorPercent = -1; // 10;
	protected final int semaphoreNeighborErrorPercent = -1; //80;
	protected final int switchSensorErrorPercent = -1; // 8;
	protected final int switchSetErrorPercent = -1; // 60;

	protected Random random = new Random(TrainBenchmarkConstants.RANDOM_SEED);

	protected int nextRandom() {
		return random.nextInt(100);
	}

	protected static final Map<String, Object> emptyMap = Collections.emptyMap();
	protected static int MAX_SEGMENT_LENGTH = 1000;

	public void generateModels() throws FileNotFoundException, IOException {
		System.out.print("Generating instance model, size: " + generatorConfig.getSize() + "... ");
		initializeConstants();
		initModel();
		generateModel();
		persistModel();
		System.out.println("Done.");
	}

	private void initializeConstants() {
		maxSegments = 5;
		maxRoutes = 5 * generatorConfig.getSize();
		maxSwitchPositions = 20;
		maxSensors = 10;
	}

	protected abstract void initModel() throws IOException;

	protected void generateModel() throws FileNotFoundException, IOException {
		Object prevSemaphore = null;
		Object firstSemaphore = null;
		List<Object> firstTracks = null;
		List<Object> prevTracks = null;

		for (long i = 0; i < maxRoutes; i++) {
			beginRoute();

			if (prevSemaphore == null) {
				final Map<String, Object> semaphoreAttributes = new HashMap<>();
				semaphoreAttributes.put(SIGNAL, Signal.GO);

				prevSemaphore = createVertex(SEMAPHORE, semaphoreAttributes);
				firstSemaphore = prevSemaphore;
			}

			Object semaphore2;
			if (i != maxRoutes - 1) {
				final Map<String, Object> semaphoreAttributes = new HashMap<>();
				semaphoreAttributes.put(SIGNAL, Signal.GO);
				semaphore2 = createVertex(SEMAPHORE, semaphoreAttributes);
			} else {
				semaphore2 = firstSemaphore;
			}

			// the semaphoreNeighborErrorPercent
			final boolean semaphoreNeighborError1 = nextRandom() < semaphoreNeighborErrorPercent;
			final Object entry = semaphoreNeighborError1 ? null : prevSemaphore;
			final Object exit = semaphore2;

			final Map<String, Object> routeReferences = new HashMap<>();
			routeReferences.put(ENTRY, entry);
			routeReferences.put(EXIT, exit);

			final Object route = createVertex(ROUTE, emptyMap, routeReferences);

			final int swps = random.nextInt(maxSwitchPositions);
			final List<Object> currentTrack = new ArrayList<>();

			for (int j = 0; j < swps; j++) {
				final Object sw = createVertex(SWITCH);
				currentTrack.add(sw);

				final int sensors = random.nextInt(maxSensors - 1) + 1;

				Object lastSensor = null;
				for (int k = 0; k < sensors; k++) {
					final Object sensor = createVertex(SENSOR);

					// add "sensors" edge from route to sensor
					final boolean routeSensorError = nextRandom() < routeSensorErrorPercent;
					final Object sourceRoute = routeSensorError ? null : route;
					createEdge(DEFINED_BY, sourceRoute, sensor);

					for (int m = 0; m < maxSegments; m++) {
						createSegment(currentTrack, sensor);
					}
					
					lastSensor = sensor;					
				}
				// add "sensor" edge from switch to sensor
				final boolean switchSensorError = nextRandom() < switchSensorErrorPercent;
				final Object targetSensor = switchSensorError ? null : lastSensor;
				createEdge(SENSOR_EDGE, sw, targetSensor);

				final int stateNumber = random.nextInt(4);
				final Position stateEnum = Position.values()[stateNumber];
				setAttribute(SWITCH, sw, CURRENTPOSITION, stateEnum);

				// the errorInjectedState may contain a bad value
				final boolean switchSetError = nextRandom() < switchSetErrorPercent;
				final int errorInjectedStateNumber = switchSetError ? 3 - stateNumber : stateNumber;
				final Position errorInjectedStateEnum = Position.values()[errorInjectedStateNumber];
				final Map<String, Object> switchPosititonAttributes = new HashMap<>();
				switchPosititonAttributes.put(POSITION, errorInjectedStateEnum);

				final Map<String, Object> switchPositionOutgoingEdges = new HashMap<>();
				switchPositionOutgoingEdges.put(SWITCH_EDGE, sw);

				final Map<String, Object> switchPositionIncomingEdges = new HashMap<>();
				switchPositionIncomingEdges.put(FOLLOWS, route);

				createVertex(SWITCHPOSITION, switchPosititonAttributes, switchPositionOutgoingEdges, switchPositionIncomingEdges);
			}

			Object prevte = null;
			for (final Object trackelement : currentTrack) {
				if (prevte != null) {
					createEdge(CONNECTSTO, prevte, trackelement);
				}
				prevte = trackelement;
			}

			if (prevTracks != null && prevTracks.size() > 0 && currentTrack.size() > 0) {
				createEdge(CONNECTSTO, prevTracks.get(prevTracks.size() - 1), currentTrack.get(0));
			}

			// Loop the last track element of the last route to the first track
			// element of the first route.
			if (i == maxRoutes - 1) {
				if (currentTrack != null && currentTrack.size() > 0 && firstTracks.size() > 0) {
					createEdge(CONNECTSTO, currentTrack.get(currentTrack.size() - 1), firstTracks.get(0));
				}
			}

			if (prevTracks == null) {
				firstTracks = currentTrack;
			}

			prevTracks = currentTrack;
			prevSemaphore = semaphore2;

			endRoute();
		}
	}

	private void createSegment(final List<Object> currTracks, final Object sen) throws IOException {
		final boolean posLengthError = nextRandom() < posLengthErrorPercent;
		final int segmentLength = ((posLengthError ? -1 : 1) * random.nextInt(MAX_SEGMENT_LENGTH)) + 1;

		final Map<String, Object> segmentAttributes = new HashMap<>();
		segmentAttributes.put(LENGTH, segmentLength);
		final Object seg = createVertex(SEGMENT, segmentAttributes);

		createEdge(SENSOR_EDGE, seg, sen);
		currTracks.add(seg);
	}

	protected abstract void persistModel() throws IOException;

	// the createVertex() methods with fewer arguments are final

	protected final Object createVertex(final String type) throws IOException {
		return createVertex(type, emptyMap);
	}

	protected final Object createVertex(final String type, final Map<String, Object> attributes) throws IOException {
		return createVertex(type, attributes, emptyMap);
	}

	protected final Object createVertex(final String type, final Map<String, Object> attributes, final Map<String, Object> outgoingEdges)
			throws IOException {
		return createVertex(type, attributes, outgoingEdges, emptyMap);
	}

	protected final Object createVertex(final String type, final Map<String, Object> attributes, final Map<String, Object> outgoingEdges,
			final Map<String, Object> incomingEdges) throws IOException {
		id++;
		return createVertex(id, type, attributes, outgoingEdges, incomingEdges);
	}

	protected abstract Object createVertex(final int id, final String type, final Map<String, Object> attributes,
			final Map<String, Object> outgoingEdges, final Map<String, Object> incomingEdges) throws IOException;

	protected abstract void createEdge(String label, Object from, Object to) throws IOException;

	protected abstract void setAttribute(String type, Object node, String key, Object value) throws IOException;

	protected void beginRoute() throws IOException {
	};

	protected void endRoute() throws IOException {
	}

}
