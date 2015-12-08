angular.module('Liberry', []).directive('ngliberry', function() {
  
  return {

    controllerAs: 'main',
    controller: ['$http', function MainCtrl($http) {
      this.$http = $http;

      var self = this;
      self.berries = [];

      this.getBerries = function() {
        self.$http.get('/berries').then(function(response) {
          self.berries = response.data;
        });
        console.log(self.berries);
        return self.berries;
      };

      this.addBerry = function() {
        self.$http.post('/berries', { category: this.formCategory, title: this.formTitle, author: this.formAuthor, tags: this.formTags, reference: this.formReference, imgurl: this.formImage, URL: this.formURL } ).then(function success(response) {
          self.berries.push(response.data);
          self.formCategory = '';
          self.formTitle = '';
          self.formAuthor = '';
          self.formTags = '';
          self.formReference = '';
          self.formImage = '';
          self.formURL = '';
        }, function error() {
          console.log('error');
        });
      };

      this.editBerry = function(berry) {
        self.formBerryId = berry._id;
        self.formCategory = berry.category;
        self.formTitle = berry.title;
        self.formAuthor = berry.author;
        self.formTags = berry.tags;
        self.formReference = berry.reference;
        self.formImage = berry.imgurl;
        self.formURL = berry.URL;
        self.hideSubmit = true;
      };

      this.updateBerry = function() {
        self.hideSubmit = false;
        var id = this.formBerryId;
        self.$http.put('/berries/' + id, { category: this.formCategory, title: this.formTitle, author: this.formAuthor, tags: this.formTags, reference: this.formReference, imgurl: this.formImage, URL: this.formURL } ).then(function success(response) {
          self.getBerries();
          self.formCategory = '';
          self.formTitle = '';
          self.formAuthor = '';
          self.formTags = '';
          self.formReference = '';
          self.formImage = '';
          self.formURL = '';
        }, function error() {
          console.log('error');
        });
      };

      this.cancelEdit = function() {
        self.getBerries();
        self.formCategory = '';
        self.formTitle = '';
        self.formAuthor = '';
        self.formTags = '';
        self.formReference = '';
        self.formImage = '';
        self.formURL = '';
        self.hideSubmit = false;
      };

      this.deleteBerry = function(berry) {
        var id = berry._id;
        console.log(id);
        self.$http.delete('/berries/' + id, { category: this.formCategory, title: this.formTitle, author: this.formAuthor, tags: this.formTags, reference: this.formReference, imgurl: this.formImage, URL: this.formURL } ).then(function success(response) { 
          self.getBerries();
        }, function error() {
          console.log('error');
        });
      };

    }]

  }

});



