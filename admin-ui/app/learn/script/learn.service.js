(function (angular) {
  'use strict';

  angular.module('MadSkillsDeveloper.learn').factory('learnService', authService);

  function authService($http, authService) {
    var service = {};

    var makeCall = function (verb, url, data, params, headers) {
      var base = '/api';
      return $http({
                     method: verb,
                     data: data,
                     url: base + url,
                     params: params,
                     headers: headers
                   })
        .then(function (reply) {
          return reply.data;
        });
    };


    service.getUserSubjects = function () {
      return makeCall('GET', '/custom/subjects?userId=1');
    };

    service.getStudyGroupsForSubject = function (subjectId) {
      return makeCall('GET', '/custom/studyGroups', '', {subjectId: subjectId, hasMentor: true})
    };

    service.addUserToStudyGroup = function(groupId){
      return makeCall('POST', '/custom/userStudyGroupMaps', {userId: authService.getUser().id, studyGroupId: groupId});
    };

    service.getStudyGroupsForUser = function () {
      return makeCall('GET', '/custom/studyGroups?userId=' + authService.getUser().id);
    };

    return service;
  }


})(angular);