// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getDate property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.getdate
description: Checking DontDelete attribute
---*/

if (delete Date.prototype.getDate.length !== true) {
  $ERROR('#1: The Date.prototype.getDate.length property does not have the attributes DontDelete');
}

if (Date.prototype.getDate.hasOwnProperty('length')) {
  $ERROR('#2: The Date.prototype.getDate.length property does not have the attributes DontDelete');
}
