## API Report File for "@azure/schema-registry-avro"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { SchemaRegistry } from '@azure/schema-registry';

// @public
export class AvroSerializer<MessageT = MessageContent> {
    constructor(client: SchemaRegistry, options?: AvroSerializerOptions<MessageT>);
    deserialize(message: MessageT, options?: DeserializeOptions): Promise<unknown>;
    serialize(value: unknown, schema: string): Promise<MessageT>;
}

// @public
export interface AvroSerializerOptions<MessageT> {
    autoRegisterSchemas?: boolean;
    groupName?: string;
    messageAdapter?: MessageAdapter<MessageT>;
}

// @public
export interface DeserializeOptions {
    schema?: string;
}

// @public
export interface MessageAdapter<MessageT> {
    consume: (message: MessageT) => MessageContent;
    produce: (messageContent: MessageContent) => MessageT;
}

// @public
export interface MessageContent {
    contentType: string;
    data: Uint8Array;
}

// (No @packageDocumentation comment for this package)

```
