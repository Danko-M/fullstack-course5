(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var toBuyListCtrl = this;

    toBuyListCtrl.initialList = ShoppingListCheckOffService.getInitialList();
    toBuyListCtrl.transferItem = function(itemIndex) {
      ShoppingListCheckOffService.transferItem(itemIndex);
        toBuyListCtrl.emptyMessage = 
        ShoppingListCheckOffService.getToBuyListEmpty();
    };
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var purchasesListCtrl = this;
    purchasesListCtrl.list = ShoppingListCheckOffService.getBoughtItemsList();
    purchasesListCtrl.emptyMessage2 = function() {
      return ShoppingListCheckOffService.getNothingBought();
    }
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyList = [{name: 'cookies', quantity: 5},{name: 'cookies', quantity: 4},{name: 'cookies', quantity: 3},{name: 'cookies', quantity: 2},{name: 'cookies', quantity: 1}];
    var boughtItems = [];
    var toBuyListEmpty = false;
    var nothingBought = true;

    service.transferItem = function(itemIndex) {
      var removedItem = toBuyList.splice(itemIndex, 1);
      var item = {
        name: removedItem[0].name,
        quantity: removedItem[0].quantity,
      };
      boughtItems.push(item);
      if (toBuyList.length === 0){
        toBuyListEmpty = true;
      };

      if (boughtItems.length > 0) {
        nothingBought = false;
      }; 
    };

    service.getInitialList = function() {
      return toBuyList;
    };

    service.getBoughtItemsList = function() {
      return boughtItems;
    };

    service.getToBuyListEmpty = function() {
      return toBuyListEmpty;
    };

    service.getNothingBought = function() {
      return nothingBought;
    };
  }

})();
