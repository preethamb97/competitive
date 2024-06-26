let routes = [
    ["IXA", "AMD"], ["IXA", "AJL"], ["IXA", "BLR"], 
    ["IXA", "MAA"], ["IXA", "DEL"], ["IXA", "DIB"], 
    ["IXA", "GAU"], ["IXA", "IMF"], ["IXA", "CCU"], 
    ["IXA", "SHL"], ["IXA", "VTZ"], ["AGX", "BLR"], 
    ["AGX", "COK"], ["AGR", "AMD"], ["AGR", "BLR"], 
    ["AGR", "BHO"], ["AGR", "LKO"], ["AGR", "BOM"], ["AMD", "ATQ"], 
    ["AMD", "IXB"], ["AMD", "IXG"], ["AMD", "BLR"], 
    ["AMD", "BHO"], ["AMD", "BBI"], ["AMD", "BHJ"], 
    ["AMD", "IXC"], ["AMD", "MAA"], ["AMD", "CJB"], 
    ["AMD", "GOI"], ["AMD", "DED"], ["AMD", "DEL"], 
    ["AMD", "RDP"], ["AMD", "HYD"], ["AMD", "IDR"], 
    ["AMD", "JAI"], ["AMD", "JSA"], ["AMD", "IXJ"], 
    ["AMD", "JDH"], ["AMD", "COK"], ["AMD", "KLH"], 
    ["AMD", "CCU"], ["AMD", "LKO"], ["AMD", "BOM"], 
    ["AMD", "NAG"], ["AMD", "PAT"], ["AMD", "IXZ"], 
    ["AMD", "PNQ"], ["AMD", "RPR"], ["AMD", "IXR"], 
    ["AMD", "TRV"], ["AMD", "UDR"], ["AMD", "VNS"], 
    ["AMD", "VTZ"], ["AJL", "DEL"], ["AJL", "DMU"], 
    ["AJL", "GAU"], ["AJL", "IMF"], ["AJL", "CCU"], ["AJL", "BOM"], 
    ["AJL", "SHL"], ["AIP", "IDR"], ["AIP", "STV"], ["IXD", "BLR"], 
    ["IXD", "BHO"], ["IXD", "BBI"], ["IXD", "PAB"], 
    ["IXD", "DED"], ["IXD", "DEL"], ["IXD", "GOP"], 
    ["IXD", "IDR"], ["IXD", "LKO"], ["IXD", "BOM"], 
    ["IXD", "PNQ"], ["IXD", "RPR"], ["ATQ", "BLR"], 
    ["ATQ", "MAA"], ["ATQ", "GOI"], ["ATQ", "DEL"], 
    ["ATQ", "HYD"], ["ATQ", "CCU"], ["ATQ", "LKO"], 
    ["ATQ", "BOM"], ["ATQ", "PNQ"], ["ATQ", "SXR"], 
    ["IXU", "DEL"], ["IXU", "HYD"], ["IXU", "BOM"], 
    ["IXB", "BLR"], ["IXB", "MAA"], ["IXB", "DEL"], 
    ["IXB", "DIB"], ["IXB", "GAU"], ["IXB", "HYD"], 
    ["IXB", "CCU"], ["IXB", "BOM"], ["BEK", "BLR"], 
    ["BEK", "DEL"], ["BEK", "BOM"], ["IXG", "BLR"], 
    ["IXG", "DEL"], ["IXG", "HYD"], ["IXG", "IDR"], 
    ["IXG", "JDH"], ["IXG", "BOM"], ["IXG", "NAG"], 
    ["IXG", "STV"], ["IXG", "TIR"]
];

function generateVertexList() {
  let vertexList = new Map(); 
  const addNode = (node) => {
    vertexList.set(node[0], []);
    vertexList.set(node[1], []);
  }
  const addEdge = (node) => {

    const v1 = vertexList.get(node[0]);
    const v2 = vertexList.get(node[1])
    v1.push(node[1]);
    v2.push(node[0]);
  }
  routes.forEach(addNode);
  routes.forEach(addEdge);
  return vertexList; 
}


const airportMapping = generateVertexList();

function traceRoutes(source, destination, visited = []) {
  let stack = [source];
  while(stack.length) {
    // console.log("***visited", visited, stack)
    const stackElement = stack.pop();
    // console.log("***stackElement", stackElement)
    if (!visited.includes(stackElement)) {
      visited.push(stackElement);
    }
    // console.log("********visited after",  visited, stack)

    if (stackElement == destination) {
      return visited;
    }
    airportMapping.get(stackElement).forEach(tempDestination => {
      if (!visited.includes(tempDestination)) {
        stack.push(tempDestination);
        return traceRoutes(tempDestination, destination, visited);
      }
    });

    // console.log("*******visited return", visited, stack)
  }

  return visited;
};

const visited = traceRoutes("IXD", "BLR");
console.log("output : " ,visited);
