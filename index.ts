import { Reader } from "./models/reader";
import { Writer } from "./models/writer";

class DiskReader implements Reader {
  read(bytes) {
    console.log(`disk reader reading ${bytes} bytes`);
  }
}

class Network implements Writer {
  write(bytes) {
    console.log(`network writting ${bytes} bytes`);
  }
}

class FlashDrv implements Writer {
  write(bytes) {
    console.log(`flash drive writting ${bytes} bytes`);
  }
}

function Copy(writer: Writer, reader: Reader, bytes: number = 10) {
  reader.read(bytes);
  writer.write(bytes);
}

const copy = Copy(new Network(), new DiskReader(), 2000);
