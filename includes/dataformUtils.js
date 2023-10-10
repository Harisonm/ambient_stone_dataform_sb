const { dataform } = require('@dataform/core');

function loadDataFromBucket(dataset, table) {
  return `
    LOAD DATA OVERWRITE \`${dataset}.${table}\` (
      id INT64,
      shop_name STRING
    )
    CLUSTER BY shop_name
    FROM FILES (
      format = 'JSON',
      uris = ['gs://terraform-ambient-stone-394013/data/shops/*']
    );
  `;
}

module.exports = { loadDataFromBucket };