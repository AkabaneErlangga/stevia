const socket = io.connect('http://localhost:3001');
socket.connect();

function batch(n){
  socket.on('batch', function(data){
    if ( data[0] >= n ) {
      let end = Date.now()
      let persec = n / (( end - start ) / 1000)
      console.log('Took %s ms for %s at %s/s', end - start, n, persec.toFixed(1))
      return socket.close()
    }
  })
}

function startDump(count = 500000){
  socket.emit('start dump', { count: count })
  console.log('Start dump', count)
  batch(count)
}

startDump(5)