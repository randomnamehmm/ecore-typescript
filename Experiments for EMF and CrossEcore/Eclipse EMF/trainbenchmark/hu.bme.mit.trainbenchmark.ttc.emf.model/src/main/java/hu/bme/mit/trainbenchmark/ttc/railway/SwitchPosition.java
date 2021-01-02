/*******************************************************************************
 * Copyright (c) 2010-2015, Gabor Szarnyas, Benedek Izso, Istvan Rath and Daniel Varro
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Benedek Izso - initial API and implementation
 *   Gabor Szarnyas - initial API and implementation
 *******************************************************************************/
/**
 */
package hu.bme.mit.trainbenchmark.ttc.railway;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Switch Position</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link hu.bme.mit.trainbenchmark.ttc.railway.SwitchPosition#getSwitch <em>Switch</em>}</li>
 *   <li>{@link hu.bme.mit.trainbenchmark.ttc.railway.SwitchPosition#getPosition <em>Position</em>}</li>
 *   <li>{@link hu.bme.mit.trainbenchmark.ttc.railway.SwitchPosition#getRoute <em>Route</em>}</li>
 * </ul>
 * </p>
 *
 * @see hu.bme.mit.trainbenchmark.ttc.railway.RailwayPackage#getSwitchPosition()
 * @model
 * @generated
 */
public interface SwitchPosition extends RailwayElement {
	/**
	 * Returns the value of the '<em><b>Switch</b></em>' reference.
	 * It is bidirectional and its opposite is '{@link hu.bme.mit.trainbenchmark.ttc.railway.Switch#getPositions <em>Positions</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Switch</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Switch</em>' reference.
	 * @see #setSwitch(Switch)
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.RailwayPackage#getSwitchPosition_Switch()
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.Switch#getPositions
	 * @model opposite="positions" required="true"
	 * @generated
	 */
	Switch getSwitch();

	/**
	 * Sets the value of the '{@link hu.bme.mit.trainbenchmark.ttc.railway.SwitchPosition#getSwitch <em>Switch</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Switch</em>' reference.
	 * @see #getSwitch()
	 * @generated
	 */
	void setSwitch(Switch value);

	/**
	 * Returns the value of the '<em><b>Position</b></em>' attribute.
	 * The literals are from the enumeration {@link hu.bme.mit.trainbenchmark.ttc.railway.Position}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Position</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Position</em>' attribute.
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.Position
	 * @see #setPosition(Position)
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.RailwayPackage#getSwitchPosition_Position()
	 * @model required="true"
	 * @generated
	 */
	Position getPosition();

	/**
	 * Sets the value of the '{@link hu.bme.mit.trainbenchmark.ttc.railway.SwitchPosition#getPosition <em>Position</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Position</em>' attribute.
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.Position
	 * @see #getPosition()
	 * @generated
	 */
	void setPosition(Position value);

	/**
	 * Returns the value of the '<em><b>Route</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link hu.bme.mit.trainbenchmark.ttc.railway.Route#getFollows <em>Follows</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Route</em>' container reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Route</em>' container reference.
	 * @see #setRoute(Route)
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.RailwayPackage#getSwitchPosition_Route()
	 * @see hu.bme.mit.trainbenchmark.ttc.railway.Route#getFollows
	 * @model opposite="follows" required="true" transient="false"
	 * @generated
	 */
	Route getRoute();

	/**
	 * Sets the value of the '{@link hu.bme.mit.trainbenchmark.ttc.railway.SwitchPosition#getRoute <em>Route</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Route</em>' container reference.
	 * @see #getRoute()
	 * @generated
	 */
	void setRoute(Route value);

} // SwitchPosition
