// TODO publish built extension through GraphQL API

const publishExtensionMutation = `mutation PublishExtension(
    $extensionID: String!,
    $manifest: String!,
    $bundle: String,
    $sourceMap: String,
    $force: Boolean!,
  ) {
    extensionRegistry {
      publishExtension(
        extensionID: $extensionID,
        manifest: $manifest,
        bundle: $bundle,
        sourceMap: $sourceMap,
        force: $force,
      ) {
        extension {
          extensionID
          url
        }
      }
    }
  }`;

module.exports = () => {
  // TODO
};
