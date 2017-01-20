fdescribe("Components", function () {

    describe("Inputs", function () {

        describe("Input Field", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('my-angular-components'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController', '$compile', '$rootScope', '$httpBackend');
                vm = $componentController('myInputField', null);
            });


            it("should be defined", function () {
                // $compile the template, and pass in the $scope.
             // This will find your directive and run everything
              $httpBackend.expectGET("inputFieldTemplate.html").respond(200);
             var template = $compile("<my-input-field input-type='text'></my-input-field>")($rootScope);
 
              
          
             // Now run a $digest cycle to update your template with new data
             $rootScope.$digest();
             console.log("template");
            console.log(template);
             // Render the template as a string
             var templateAsHtml = template.html();
            console.log(templateAsHtml);
            //  // Verify that the $scope variables are in the template
            //  expect(templateAsHtml).toContain($rootScope.header);
            //  expect(templateAsHtml).toContain($rootScope.text);
 
            //  // Do it again with new values
            //  var previousHeader = $rootScope.header;
            //  var previousText = $scope.text;
            //  $scope.header = "A completely different header";
            //  $scope.text = "Something completely different";
 
            //  // Run the $digest cycle again
            //  $scope.$digest();
 
            //  templateAsHtml = template.html();
 
            //  expect(templateAsHtml).toContain($scope.header);
            //  expect(templateAsHtml).toContain($scope.text);
            //  expect(templateAsHtml).toNotContain(previousHeader);
            //  expect(templateAsHtml).toNotContain(previousText);

            });


            // it('Replaces the element with the appropriate content', function () {
            //     //expect a get request to "internalapi/quotes"
            //     $httpBackend.expectGET("inputFieldTemplate.html").respond(200);
            //     // Compile a piece of HTML containing the directive
            //     var element =angular.element("<my-input-field input-type='text'></my-input-field>")($rootScope);
            //     element = $compile(element)($rootScope);
            //     // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
            //     $rootScope.$digest();
            //     scope.$digest();
            //         $httpBackend.flush();
            //     // Check that the compiled element contains the templated content
            //     console.log("_----------------");
            //     console.log(element);
            //     expect(element.html()).toContain("text");
            // });
        });

    });
});
