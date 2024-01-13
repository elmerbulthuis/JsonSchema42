import * as schemaIntermediate from "schema-intermediate";

export abstract class DocumentBase<N = unknown> {
  public abstract readonly documentNodeUrl: URL;
  public readonly documentNode: N;

  constructor(documentNode: unknown) {
    if (!this.isDocumentNode(documentNode)) {
      throw new TypeError("invalid documentNode");
    }
    this.documentNode = documentNode;
  }

  public abstract getIntermediateNodeEntries(): Iterable<
    readonly [string, schemaIntermediate.Node]
  >;

  public pointerToNodeUrl(nodePointer: string): URL {
    return new URL(this.pointerToNodeHash(nodePointer), this.documentNodeUrl);
  }

  public abstract getNodeUrls(): Iterable<URL>;

  protected abstract isDocumentNode(node: unknown): node is N;

  public abstract pointerToNodeHash(nodePointer: string): string;
  public abstract nodeHashToPointer(nodeHash: string): string;
}
