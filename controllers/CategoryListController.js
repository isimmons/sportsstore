angular.module("sportsStore")
    .constant("PL_ACTIVE_CLASS", "btn-primary")
    .controller("CategoryListController", function($scope, $filter, PL_ACTIVE_CLASS) {
        var selectedCategory = null;

        $scope.selectedCategory = function(newCategory) {
            selectedCategory = newCategory;
        };

        $scope.categoryFilterFn = function(product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryClass = function(category) {
            return selectedCategory == category ? PL_ACTIVE_CLASS : "";
        }
    });