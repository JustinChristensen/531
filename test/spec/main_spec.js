/**
 * Test that application setup went alright
 *
 * Justin Christensen
 * Sat Dec 29 14:28:48 2012
 */
(function (window, $, undefined) {
  'use strict';

  // Main _531 Namespace
  describe('_531', function () {
    it('should have mv* namespaces', function () {
      expect(_531).to.exist;
      expect(_531).to.have.property('Models');
      expect(_531).to.have.property('Collections');
      expect(_531).to.have.property('Views');
      expect(_531).to.have.property('Routers');
    });

    it('should have initial rows for bootstrapping', function () {
      expect(_531).to.have.property('initialRows');
      expect(_531.initialRows).to.have.length(4);
    });

    // Program Data Structs
    // Ensure that each day of the week has three
    // sets with three different percentages
    describe('#program', function () {
      var program = _531.program, day;

      it('should have percentages', function () {
        expect(program).to.have.property('percentages');
        for(day in program.percentages) {
          expect(program.percentages[day]).to.have.length(3);
        }
      });

      it('should have repetitions', function () {
        expect(program).to.have.property('reps');
        for(day in program.reps) {
          expect(program.reps[day]).to.have.length(3);
        }
      });
    });

    describe('#utils', function () {
      it('converts percentages', function () {
        var toPercent = _531.utils.toPercent;
        expect(toPercent(0)).to.equal(0);
        expect(toPercent(15)).to.equal(.15);
        expect(toPercent(.15)).to.equal(.15);
        expect(toPercent(100)).to.equal(1);
      });
    });

    // Init gets tested in the App View Spec
    describe('#init()', function () {
      it('initializes', function () {
        expect(_531).to.respondTo('init');
      });
    });
  });


}(window, jQuery));
