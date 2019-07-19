// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |

---*/

function __consolePrintHandle__(msg){
  print(msg);
}

function $DONE(){
  if(!arguments[0])
    $async_done = true;
  else
    __consolePrintHandle__('Error:' + arguments[0]);
}
