import { EStructuralFeature } from "./EStructuralFeature";
import { EObject } from "./EObject";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
export interface InternalEObject extends EObject {
    eNotificationRequired(): boolean;
    eURIFragmentSegment(eFeature: EStructuralFeature, eObject: EObject): string;
    eObjectForURIFragmentSegment(uriFragmentSegment: string): EObject;
    eSetClass(eClass: EClass): void;
    /**
     * Returns a setting that can be used to access this object's feature.
     * @param feature the feature of the desired setting.
     * @return a setting that can be used to access this object's feature.
     */
    eBaseStructuralFeatureID(derivedFeatureID: number, baseClass: Function): number;
    eContainerFeatureID(): number;
    eDerivedStructuralFeatureID_number_Function(baseFeatureID: number, baseClass: Function): number;
    eDerivedStructuralFeatureID_EStructuralFeature(feature: EStructuralFeature): number;
    eDerivedOperationID(baseOperationID: number, baseClass: Function): number;
    /**
     * Sets this object to be directly contained by the resource
     * and returns accumulated notifications.
     * This is only done as the inverse of {@link Resource#getContents()}<code>.add(this)</code>.
     * @return accumulated notifications.
     */
    eInverseAdd(...args: Array<any>): NotificationChain;
    eInverseAdd3(otherEnd: InternalEObject, featureID: number, notifications: NotificationChain): NotificationChain;
    eInverseAdd4(otherEnd: InternalEObject, featureID: number, baseClass: Function, notifications: NotificationChain): NotificationChain;
    eInverseRemove(...args: Array<any>): NotificationChain;
    eInverseRemove3(otherEnd: InternalEObject, featureID: number, notifications: NotificationChain): NotificationChain;
    eInverseRemove4(otherEnd: InternalEObject, featureID: number, baseClass: Function, notifications: NotificationChain): NotificationChain;
    /**
     * Sets the container to be new container and appropriate feature.
     * and returns accumulated notifications.
     * Since the container feature may not be navigable, i.e., may not exist, the containment feature may be encoded instead.
     * @return accumulated notifications.
     */
    eBasicSetContainer(newContainer: InternalEObject, newContainerFeatureID: number, notifications: NotificationChain): NotificationChain;
    /**
     * Removes this object from whatever container holds it,
     * and returns accumulated notifications.
     * @return accumulated notifications.
     */
    eBasicRemoveFromContainer(notifications: NotificationChain): NotificationChain;
    /**
     * Returns the proxy URI of this object.
     * It can be used to {@link org.eclipse.emf.ecore.util.EcoreUtil#resolve(EObject, EObject) resolve} to the actual object.
     * @return the proxy URI of this object.
     * @see org.eclipse.emf.ecore.util.EcoreUtil#resolve(EObject, org.eclipse.emf.ecore.resource.ResourceSet)
     * @see Resource#unload
     */
    /**
     * Set the proxy URI of this object.
     * It will be used to {@link org.eclipse.emf.ecore.util.EcoreUtil#resolve(EObject, EObject) resolve} to the actual object.
     * @param uri the URI.
     * @see org.eclipse.emf.ecore.util.EcoreUtil#resolve(EObject, org.eclipse.emf.ecore.resource.ResourceSet)
     * @see Resource#unload
     */
    /**
     * Resolves the {@link EObject#eIsProxy proxy} object relative to this object.
     * @see org.eclipse.emf.ecore.util.EcoreUtil#resolve(EObject,EObject)
     * @return the resolved object, or the original if the proxy can't be resolved.
     */
    eResolveProxy(proxy: InternalEObject): EObject;
    /**
     * Returns the internal container, or <code>null</code>.
     * It does not resolve a proxy.
     * @return the internal container.
     * @see EObject#eContainer
     * @see InternalEObject#eDirectResource
     */
    eInternalContainer(): InternalEObject;
    /**
     * Returns the containing internal resource, or <code>null</code>.
     * @return the containing internal resource.
     * @see EObject#eResource
     */
    /**
     * Returns the directly containing internal resource, or <code>null</code>.
     * @return the directly containing internal resource.
     * @see EObject#eResource
     * @see InternalEObject#eInternalResource
     * @see InternalEObject#eInternalContainer
     */
    /**
     * Returns the store associated with this object.
     * @return the store associated with this object.
     */
    /**
     * Set the store associated with this object.
     * Most objects will <b>not</b> support this.
     * @param store the store to associate with this object.
     * @throws UnsupportedOperationException
     */
    eGet(...args: Array<any>): any;
    eGet_EStructuralFeature_boolean_boolean(eFeature: EStructuralFeature, resolve: boolean, coreType: boolean): any;
    /**
     * Does the equivalent of <code>eObject.eGet(eObject.eClass().getEStructuralFeature(featureID), resolve, coreType)</code>.
     * @see #eGet(EStructuralFeature, boolean, boolean)
     */
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
}
