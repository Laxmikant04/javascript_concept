/*
Shared memory concept :
Shared memory allows javascript threads to access and update same shared memory data. Hence all thread will always see same data.
Without shared memory concept , thread shares the data as the copy of original data so every thread will have it's own copy and
will access and update the same.
With shared memory concept ,thread shares a copy SharedArrayBuffer object which points to the original data so every thread will
point the original data and access/update the same.

more info - https://www.hongkiat.com/blog/shared-memory-in-javascript/
*/