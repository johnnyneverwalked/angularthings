# Url Shortcut widget


### Description
A simple widget that redirects to a given url.

***

### How to use

It ships together with `app-grid`. To use it otherwise it is advised to put it on a div 
with the desired dimensions because it fills the parent's contents
 

Inputs: 
* displayName: `string`
* icon: `string`
* size: `string` (default = `""`)
  * This input is tied to the `app-grid-widget` since it sets its `class`.
  Using it outside of `app-grid` has no effect.
* color: `Colors`
* navigationUrl: `string`
  * The url to redirect to.

Outputs: 
* modifyWidgetData: `EventEmitter<IWidgetModification>`
  * The preset event emitter to change the saved `app-grid`'s `widget` data and options. (See `app-grid`'s docs for details)
* changeUrl: `EventEmitter<string>`
  * Emits the url just before the router navigates to it.
