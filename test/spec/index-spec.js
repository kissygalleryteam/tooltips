KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('tooltips', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/tooltips/1.0.0/']});