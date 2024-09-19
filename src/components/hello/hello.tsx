import React, { useEffect, useState } from "react";
import { HelloClient } from "../../proto/HelloServiceClientPb";
import { HelloRequest, HelloResponse } from "../../proto/hello_pb";

const hello_client = new HelloClient("http://localhost:8080", null, null);

const HelloService = () => {
    const [message, setMessage] = useState<string>("Loading...");

    useEffect(() => {
        const request = new HelloRequest();

        hello_client.sayHello(request, {}, (err, response: HelloResponse) => {
            if (err) {
                alert(err.message);
                setMessage("Error occurred");
            } else {
                setMessage(response.getMessage());
            }
        });
    }, []);

    return <div>{message}</div>
};

export default HelloService;