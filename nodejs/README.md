- [x] Node.js Event Loop

The Node.js event loop is a core concept that allows Node.js to handle asynchronous operations, enabling it to perform non-blocking I/O operations. Despite JavaScript being single-threaded, the event loop allows Node.js to manage multiple operations concurrently by delegating tasks to the system kernel whenever possible.

## How the Event Loop Works

### Event Loop Phases

The event loop is divided into several phases, each with a specific purpose:

1. **Timers:** Executes callbacks scheduled by `setTimeout` and `setInterval`.
2. **Pending Callbacks:** Executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare:** Internal use only.
4. **Poll:** Retrieves new I/O events; executes I/O-related callbacks (excluding timers and `setImmediate`).
5. **Check:** Executes `setImmediate` callbacks.
6. **Close Callbacks:** Executes close event callbacks (e.g., `socket.on('close', ...)`).

### Event Loop Cycle

The event loop continuously cycles through these phases, processing callbacks and handling I/O operations. When the event loop is idle (i.e., no more callbacks to execute), it waits for new events or I/O operations.

## Example

Consider a Node.js program with several asynchronous operations:

```javascript
const fs = require('fs');

console.log('Start');

// Timer
setTimeout(() => {
  console.log('Timeout callback');
}, 0);

// Immediate
setImmediate(() => {
  console.log('Immediate callback');
});

// I/O Operation
fs.readFile(__filename, () => {
  console.log('File read callback');
});

console.log('End');

```

Start
|
V
Main Execution
|
+--- Timer Scheduled
|      |
|      V
|   Timers Phase
|      |
|      +--- setTimeout Callback
|
+--- Immediate Scheduled
|      |
|      V
|   Check Phase
|      |
|      +--- setImmediate Callback
|
+--- I/O Operation Scheduled
       |
       V
    Poll Phase
       |
       +--- fs.readFile Callback
|
V
End

# Execution Flow

## Start of the Program

- The program begins execution, and `console.log('Start')` is called.
- `setTimeout` is scheduled, adding the callback to the Timers phase.
- `setImmediate` is scheduled, adding the callback to the Check phase.
- `fs.readFile` starts an asynchronous I/O operation, with the callback added to the Poll phase.
- `console.log('End')` is called.

## Event Loop Phases

- **Timers:** If any timer callbacks are due, they are executed. In this example, the `setTimeout` callback is executed here.
- **Pending Callbacks:** Executes I/O callbacks deferred to the next loop iteration (none in this example).
- **Poll:** The event loop waits for I/O operations. Once `fs.readFile` completes, its callback is executed.
- **Check:** Executes `setImmediate` callbacks. The `setImmediate` callback is executed here.
- **Close Callbacks:** Executes close event callbacks (none in this example).
