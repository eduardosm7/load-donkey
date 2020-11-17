# load-donkey
An extensible, flexible yet simple serverless benchmarking tool.

## load-donkey-core
The module responsible for the common business logic related to the load tests. This way it is possible to share this logic between multiple presentation layers.

## load-donkey-cli
The module responsible to be the interface with the user, via a CLI.

### How to install
To install the __load-donkey-cli__, you have to have __Node (with npm)__ already installed on your machinhe, and issue this command:

```$ bash install-cli.sh```

\* Note: this installation script for now, only works in __Ubuntu__, therefore, if you want to enhance it to work in another OS, feel free to create a PR and contribute.

### How to use
Once the __load-donkey-cli__ is installed, you can use it by issuing the following command:

```$ load-donkey /path/to/your/specfile.yaml```

Once the benchmarking has finished, a __Report__ will be generated at the following destination:

```/home/your-user/load-donkey-reports ```

### Example SpecFile

```yaml
testEngine: ab
functions:
  - address: http://host-aws.com
    provider: aws
  - address: http://host-gcp.com
    provider: gcp
  - address: http://host-azure.com
    provider: azure
request:
  method: POST
  contentType: application/json
  headers:
    - key: Authorization
      value: 123
  queryParameters:
    - key: pageSize
      value: 25
  bodyFile: /path/to/file/containing/body
parameters:
  requestCount: 10000
  concurrencyCount: 100
```