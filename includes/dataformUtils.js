const { dataform } = require('@dataform/core');

function loadDataFromBucket(bucket_name, uri, dataset, table) {
  return `
    LOAD DATA OVERWRITE \`${dataset}.${table}\` (
      id INT64,
      shop_name STRING
    )
    CLUSTER BY shop_name
    FROM FILES (
      format = 'JSON',
      uris = ['${bucket_name}/${uri}\']
    );
  `;
}

module.exports = { loadDataFromBucket };