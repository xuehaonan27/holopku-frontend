In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# HoloPKU
First put backend and frontend project directories together under one parent directory.
```
.
├── holopku
├── holopku-frontend
```
And then `cd holopku-frontend`, run the following command to update proto files.

```bash
PROTOS_DIR=../holopku/proto/api/v1
protoc --proto_path=$PROTOS_DIR $(ls $PROTOS_DIR)\
  --js_out=import_style=commonjs,binary:src/proto \
  --grpc-web_out=import_style=typescript,mode=grpcweb:src/proto
```
