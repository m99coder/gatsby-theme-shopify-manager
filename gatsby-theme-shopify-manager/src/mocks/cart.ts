export const VARIANT_ID_IN_CART =
  'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTA5NTcyNA==';

export const CHECKOUT_URL =
  'https://only-down.myshopify.com/30073356332/checkouts/4d395496fb27ee8c53b08029f9880ba3?key=13fc7660aeb709de1baa5f4b1bf7094c';

export const CART = {
  id:
    'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMz9rZXk9MTNmYzc2NjBhZWI3MDlkZTFiYWE1ZjRiMWJmNzA5NGM=',
  ready: true,
  requiresShipping: true,
  note: null,
  paymentDue: '120.00',
  paymentDueV2: {
    amount: '120.0',
    currencyCode: 'USD',
    type: {
      name: 'MoneyV2',
      kind: 'OBJECT',
      fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
      implementsNode: false,
    },
  },
  webUrl: CHECKOUT_URL,
  orderStatusUrl: null,
  taxExempt: false,
  taxesIncluded: false,
  currencyCode: 'USD',
  totalTax: '0.00',
  totalTaxV2: {
    amount: '0.0',
    currencyCode: 'USD',
    type: {
      name: 'MoneyV2',
      kind: 'OBJECT',
      fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
      implementsNode: false,
    },
  },
  lineItemsSubtotalPrice: {
    amount: '120.0',
    currencyCode: 'USD',
    type: {
      name: 'MoneyV2',
      kind: 'OBJECT',
      fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
      implementsNode: false,
    },
  },
  subtotalPrice: '120.00',
  subtotalPriceV2: {
    amount: '120.0',
    currencyCode: 'USD',
    type: {
      name: 'MoneyV2',
      kind: 'OBJECT',
      fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
      implementsNode: false,
    },
  },
  totalPrice: '120.00',
  totalPriceV2: {
    amount: '120.0',
    currencyCode: 'USD',
    type: {
      name: 'MoneyV2',
      kind: 'OBJECT',
      fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
      implementsNode: false,
    },
  },
  completedAt: null,
  createdAt: '2020-02-29T20:23:04Z',
  updatedAt: '2020-03-04T01:23:20Z',
  email: null,
  discountApplications: [],
  appliedGiftCards: [],
  shippingAddress: null,
  shippingLine: null,
  customAttributes: [],
  order: null,
  lineItems: [
    {
      id:
        'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzMxNzg0NDgxMDk1NzI0MD9jaGVja291dD00ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMw==',
      title: "Men's Down Jacket",
      variant: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTA5NTcyNA==',
        title: 'Blue / Small',
        price: '50.00',
        priceV2: {
          amount: '50.0',
          currencyCode: 'USD',
          type: {
            name: 'MoneyV2',
            kind: 'OBJECT',
            fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
            implementsNode: false,
          },
        },
        presentmentPrices: [
          {
            price: {
              amount: '50.0',
              currencyCode: 'USD',
              type: {
                name: 'MoneyV2',
                kind: 'OBJECT',
                fieldBaseTypes: {
                  amount: 'Decimal',
                  currencyCode: 'CurrencyCode',
                },
                implementsNode: false,
              },
            },
            compareAtPrice: null,
            type: {
              name: 'ProductVariantPricePair',
              kind: 'OBJECT',
              fieldBaseTypes: {compareAtPrice: 'MoneyV2', price: 'MoneyV2'},
              implementsNode: false,
            },
            hasNextPage: false,
            hasPreviousPage: false,
            variableValues: {
              checkoutId:
                'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMz9rZXk9MTNmYzc2NjBhZWI3MDlkZTFiYWE1ZjRiMWJmNzA5NGM=',
              lineItems: [
                {
                  variantId:
                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTA5NTcyNA==',
                  quantity: 1,
                },
              ],
            },
          },
        ],
        weight: 4,
        available: true,
        sku: '',
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTM4NjcxNjM0ODQyMDQ=',
          src:
            'https://cdn.shopify.com/s/files/1/0300/7335/6332/products/down-jacket-blue.jpg?v=1580011570',
          altText: null,
          type: {
            name: 'Image',
            kind: 'OBJECT',
            fieldBaseTypes: {
              altText: 'String',
              id: 'ID',
              originalSrc: 'URL',
              src: 'URL',
            },
            implementsNode: false,
          },
        },
        selectedOptions: [
          {
            name: 'Color',
            value: 'Blue',
            type: {
              name: 'SelectedOption',
              kind: 'OBJECT',
              fieldBaseTypes: {name: 'String', value: 'String'},
              implementsNode: false,
            },
          },
          {
            name: 'Size',
            value: 'Small',
            type: {
              name: 'SelectedOption',
              kind: 'OBJECT',
              fieldBaseTypes: {name: 'String', value: 'String'},
              implementsNode: false,
            },
          },
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: 'UnitPriceMeasurement',
            kind: 'OBJECT',
            fieldBaseTypes: {
              measuredType: 'UnitPriceMeasurementMeasuredType',
              quantityUnit: 'UnitPriceMeasurementMeasuredUnit',
              quantityValue: 'Float',
              referenceUnit: 'UnitPriceMeasurementMeasuredUnit',
              referenceValue: 'Int',
            },
            implementsNode: false,
          },
        },
        product: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0NTc0Mzc2MjY0MTI=',
          handle: 'mens-down-jacket',
          type: {
            name: 'Product',
            kind: 'OBJECT',
            fieldBaseTypes: {
              availableForSale: 'Boolean',
              createdAt: 'DateTime',
              description: 'String',
              descriptionHtml: 'HTML',
              handle: 'String',
              id: 'ID',
              images: 'ImageConnection',
              onlineStoreUrl: 'URL',
              options: 'ProductOption',
              productType: 'String',
              publishedAt: 'DateTime',
              title: 'String',
              updatedAt: 'DateTime',
              variants: 'ProductVariantConnection',
              vendor: 'String',
            },
            implementsNode: true,
          },
        },
        type: {
          name: 'ProductVariant',
          kind: 'OBJECT',
          fieldBaseTypes: {
            availableForSale: 'Boolean',
            compareAtPrice: 'Money',
            compareAtPriceV2: 'MoneyV2',
            id: 'ID',
            image: 'Image',
            presentmentPrices: 'ProductVariantPricePairConnection',
            price: 'Money',
            priceV2: 'MoneyV2',
            product: 'Product',
            selectedOptions: 'SelectedOption',
            sku: 'String',
            title: 'String',
            unitPrice: 'MoneyV2',
            unitPriceMeasurement: 'UnitPriceMeasurement',
            weight: 'Float',
          },
          implementsNode: true,
        },
      },
      quantity: 1,
      customAttributes: [],
      discountAllocations: [],
      type: {
        name: 'CheckoutLineItem',
        kind: 'OBJECT',
        fieldBaseTypes: {
          customAttributes: 'Attribute',
          discountAllocations: 'DiscountAllocation',
          id: 'ID',
          quantity: 'Int',
          title: 'String',
          variant: 'ProductVariant',
        },
        implementsNode: true,
      },
      hasNextPage: {value: true},
      hasPreviousPage: false,
      variableValues: {
        checkoutId:
          'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMz9rZXk9MTNmYzc2NjBhZWI3MDlkZTFiYWE1ZjRiMWJmNzA5NGM=',
        lineItems: [
          {
            variantId:
              'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTA5NTcyNA==',
            quantity: 1,
          },
        ],
      },
    },
    {
      id:
        'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzMxNzg0NTQzMDYwMDEyMD9jaGVja291dD00ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMw==',
      title: "Women's Down Vest",
      variant: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDU0MzA2MDAxMg==',
        title: 'Black / Small',
        price: '35.00',
        priceV2: {
          amount: '35.0',
          currencyCode: 'USD',
          type: {
            name: 'MoneyV2',
            kind: 'OBJECT',
            fieldBaseTypes: {amount: 'Decimal', currencyCode: 'CurrencyCode'},
            implementsNode: false,
          },
        },
        presentmentPrices: [
          {
            price: {
              amount: '35.0',
              currencyCode: 'USD',
              type: {
                name: 'MoneyV2',
                kind: 'OBJECT',
                fieldBaseTypes: {
                  amount: 'Decimal',
                  currencyCode: 'CurrencyCode',
                },
                implementsNode: false,
              },
            },
            compareAtPrice: null,
            type: {
              name: 'ProductVariantPricePair',
              kind: 'OBJECT',
              fieldBaseTypes: {compareAtPrice: 'MoneyV2', price: 'MoneyV2'},
              implementsNode: false,
            },
            hasNextPage: false,
            hasPreviousPage: false,
            variableValues: {
              checkoutId:
                'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMz9rZXk9MTNmYzc2NjBhZWI3MDlkZTFiYWE1ZjRiMWJmNzA5NGM=',
              lineItems: [
                {
                  variantId:
                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTA5NTcyNA==',
                  quantity: 1,
                },
              ],
            },
          },
        ],
        weight: 0,
        available: true,
        sku: '',
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTM4NjcyMjIwNDA2MjA=',
          src:
            'https://cdn.shopify.com/s/files/1/0300/7335/6332/products/womens-vest-black.jpg?v=1580011549',
          altText: null,
          type: {
            name: 'Image',
            kind: 'OBJECT',
            fieldBaseTypes: {
              altText: 'String',
              id: 'ID',
              originalSrc: 'URL',
              src: 'URL',
            },
            implementsNode: false,
          },
        },
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black',
            type: {
              name: 'SelectedOption',
              kind: 'OBJECT',
              fieldBaseTypes: {name: 'String', value: 'String'},
              implementsNode: false,
            },
          },
          {
            name: 'Size',
            value: 'Small',
            type: {
              name: 'SelectedOption',
              kind: 'OBJECT',
              fieldBaseTypes: {name: 'String', value: 'String'},
              implementsNode: false,
            },
          },
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: 'UnitPriceMeasurement',
            kind: 'OBJECT',
            fieldBaseTypes: {
              measuredType: 'UnitPriceMeasurementMeasuredType',
              quantityUnit: 'UnitPriceMeasurementMeasuredUnit',
              quantityValue: 'Float',
              referenceUnit: 'UnitPriceMeasurementMeasuredUnit',
              referenceValue: 'Int',
            },
            implementsNode: false,
          },
        },
        product: {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0NTc0NTc3NDU5NjQ=',
          handle: 'womens-down-vest',
          type: {
            name: 'Product',
            kind: 'OBJECT',
            fieldBaseTypes: {
              availableForSale: 'Boolean',
              createdAt: 'DateTime',
              description: 'String',
              descriptionHtml: 'HTML',
              handle: 'String',
              id: 'ID',
              images: 'ImageConnection',
              onlineStoreUrl: 'URL',
              options: 'ProductOption',
              productType: 'String',
              publishedAt: 'DateTime',
              title: 'String',
              updatedAt: 'DateTime',
              variants: 'ProductVariantConnection',
              vendor: 'String',
            },
            implementsNode: true,
          },
        },
        type: {
          name: 'ProductVariant',
          kind: 'OBJECT',
          fieldBaseTypes: {
            availableForSale: 'Boolean',
            compareAtPrice: 'Money',
            compareAtPriceV2: 'MoneyV2',
            id: 'ID',
            image: 'Image',
            presentmentPrices: 'ProductVariantPricePairConnection',
            price: 'Money',
            priceV2: 'MoneyV2',
            product: 'Product',
            selectedOptions: 'SelectedOption',
            sku: 'String',
            title: 'String',
            unitPrice: 'MoneyV2',
            unitPriceMeasurement: 'UnitPriceMeasurement',
            weight: 'Float',
          },
          implementsNode: true,
        },
      },
      quantity: 2,
      customAttributes: [],
      discountAllocations: [],
      type: {
        name: 'CheckoutLineItem',
        kind: 'OBJECT',
        fieldBaseTypes: {
          customAttributes: 'Attribute',
          discountAllocations: 'DiscountAllocation',
          id: 'ID',
          quantity: 'Int',
          title: 'String',
          variant: 'ProductVariant',
        },
        implementsNode: true,
      },
      hasNextPage: false,
      hasPreviousPage: {value: true},
      variableValues: {
        checkoutId:
          'Z2lkOi8vc2hvcGlmeS9DaGVja291dC80ZDM5NTQ5NmZiMjdlZThjNTNiMDgwMjlmOTg4MGJhMz9rZXk9MTNmYzc2NjBhZWI3MDlkZTFiYWE1ZjRiMWJmNzA5NGM=',
        lineItems: [
          {
            variantId:
              'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTA5NTcyNA==',
            quantity: 1,
          },
        ],
      },
    },
  ],
  type: {
    name: 'Checkout',
    kind: 'OBJECT',
    fieldBaseTypes: {
      appliedGiftCards: 'AppliedGiftCard',
      completedAt: 'DateTime',
      createdAt: 'DateTime',
      currencyCode: 'CurrencyCode',
      customAttributes: 'Attribute',
      discountApplications: 'DiscountApplicationConnection',
      email: 'String',
      id: 'ID',
      lineItems: 'CheckoutLineItemConnection',
      lineItemsSubtotalPrice: 'MoneyV2',
      note: 'String',
      order: 'Order',
      orderStatusUrl: 'URL',
      paymentDue: 'Money',
      paymentDueV2: 'MoneyV2',
      ready: 'Boolean',
      requiresShipping: 'Boolean',
      shippingAddress: 'MailingAddress',
      shippingLine: 'ShippingRate',
      subtotalPrice: 'Money',
      subtotalPriceV2: 'MoneyV2',
      taxExempt: 'Boolean',
      taxesIncluded: 'Boolean',
      totalPrice: 'Money',
      totalPriceV2: 'MoneyV2',
      totalTax: 'Money',
      totalTaxV2: 'MoneyV2',
      updatedAt: 'DateTime',
      webUrl: 'URL',
    },
    implementsNode: true,
  },
  userErrors: [],
};