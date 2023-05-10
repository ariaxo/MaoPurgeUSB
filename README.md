# MaoPurgeUSB
MaoPurgeUSB is a software program written in TypeScript, Node.js, and Electron.js. It includes an interface that provides information on the types, numbers, and locations of viruses, and it can monitor the insertion of multiple types of mobile storage devices and automatically pop up reminders.

When a USB is inserted, MaoPurgeUSB automatically scans the autorun.inf file and can open or delete this file. Once a autorun.inf is detected, MaoPurgeUSB can identify virus information and return it to the interface. It also provides a secure open USB function to prevent users from double-clicking to open the USB before unplugging it. It can detect and kill multiple types of viruses. Additionally, it includes a cute desktop pet that can be interacted using the mouse

The interface is implemented in TypeScript and Electron.js, while operations on the USB and system are implemented using Node.js child process.

## Features

* Interface that displays information on virus types, numbers, and locations
* Monitoring of multiple types of mobile storage device insertion and automatic reminders
* Scanning and opening/deleting of autorun.inf file
* Detection of virus information and return to interface
* Secure open USB function to prevent accidental opening before unplugging
* Detection and killing of multiple types of viruses
* Cute cat desktop pet that can be interacted with using the mouse
* Interface implemented in TypeScript and Electron.js
* Operations on USB and system implemented using Node.js child process

## Usage


## License

MaoPurgeUSB is licensed under the MIT license. 
